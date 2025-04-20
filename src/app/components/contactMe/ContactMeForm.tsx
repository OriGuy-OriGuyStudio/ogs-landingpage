'use client';
import React, { useState } from 'react';
import { Field, Form, Formik, useField, useFormik } from 'formik';

import * as Yup from 'yup';
import { div } from 'motion/react-client';
import { SendHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import axios from 'axios';
import { json } from 'stream/consumers';
import { log } from 'console';

function ContactMeForm() {
  const [submitted, setSubmitted] = useState(false);
  const svgVarients = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.75,
      },
    },
  };
  const pathVarients = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      tel: '',
      email: '',
    },
    async onSubmit(values, formikHelpers) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.8 },
      });
      const json = JSON.stringify(values);
      await axios.post(
        'https://hook.eu2.make.com/1puo18kep0t4lrn8nbep3lzgqtbij25t',
        {
          name: values.name,
          tel: values.tel,
          email: values.email,
        }
      );
      setSubmitted(true);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'השם חייב להיות מינימום 2 תווים')
        .required('אני אשמח לדעת איך קוראים לך 😊'),
      tel: Yup.string()
        .matches(
          /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/,
          'המספר חייב להיות מספר ישראלי לדוגמא 0547520899 או 972547520899+'
        )
        .required('אני צריך לדעת לאיזה מספר לחזור אלייך 🎉'),
      email: Yup.string().email('אנא הזמן מייל תקין'),
    }),
  });

  if (!submitted) {
    return (
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col items-start justify-start gap-2 text-right">
          <label className="text-size-brand-h6 font-extrabold" htmlFor="text">
            שם מלא
          </label>
          <input
            placeholder="ישראל ישראלי"
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            id="name"
            className="bg-color-brand-cyan-200-light text-color-brand-purple-900-dark h-10 w-full rounded-lg px-4"
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="text-size-brand-h6 text-color-brand-red-400-light font-black">
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col items-start justify-start gap-2 text-right">
          <label className="text-size-brand-h6 font-extrabold" htmlFor="tel">
            טלפון לחזרה
          </label>
          <input
            placeholder="0547520899"
            type="tel"
            name="tel"
            id="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tel}
            className="bg-color-brand-cyan-200-light text-color-brand-purple-900-dark h-10 w-full rounded-lg px-4 text-right"
          />
          {formik.errors.tel && formik.touched.tel ? (
            <div className="text-size-brand-h6 text-color-brand-red-400-light font-black">
              {formik.errors.tel}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col items-start justify-start gap-2 text-right">
          <label className="text-size-brand-h6 font-extrabold" htmlFor="email">
            מייל, מבטיח לא פרסומי
          </label>
          <input
            placeholder="origuy@origuystudio.com"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            id="email"
            className="bg-color-brand-cyan-200-light text-color-brand-purple-900-dark h-10 w-full rounded-lg px-4"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-size-brand-h6 text-color-brand-red-400-light font-black">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <motion.button
          whileHover={{ scale: 1.05, rotate: '2.5deg' }}
          whileTap={{ scale: 0.95, rotate: '-2.5deg' }}
          transition={{ duration: 0.5, ease: 'backOut' }}
          className="text-size-brand-h6 bg-color-brand-pink-500-dark mt-4 flex w-2/4 flex-row items-center justify-center gap-2 rounded-xl px-4 py-2 font-black lg:w-2/4"
          type="submit"
        >
          אורי, דבר איתי{' '}
          <motion.span
            initial={{ rotate: '180deg' }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.75 }}
          >
            <SendHorizontal />
          </motion.span>
        </motion.button>
      </form>
    );
  } else {
    return (
      <div className="mt-8 flex flex-col items-start justify-start gap-4 text-right font-black text-pretty lg:mt-8 lg:w-3/4 lg:items-start lg:justify-start lg:text-right">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-party-popper-icon lucide-party-popper"
          variants={svgVarients}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            variants={pathVarients}
            initial="hidden"
            animate="visible"
            d="M5.8 11.3 2 22l10.7-3.79"
          />
          <motion.path
            variants={pathVarients}
            initial="hidden"
            animate="visible"
            d="M4 3h.01"
          />
          <motion.path
            variants={pathVarients}
            initial="hidden"
            animate="visible"
            d="M22 8h.01"
          />
          <motion.path
            variants={pathVarients}
            initial="hidden"
            animate="visible"
            d="M15 2h.01"
          />
          <motion.path
            variants={pathVarients}
            initial="hidden"
            animate="visible"
            d="M22 20h.01"
          />
          <motion.path
            variants={pathVarients}
            initial="hidden"
            animate="visible"
            d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
          />
          <motion.path
            variants={pathVarients}
            initial="hidden"
            animate="visible"
            d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"
          />
          <motion.path
            variants={pathVarients}
            initial="hidden"
            animate="visible"
            d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"
          />
          <motion.path
            variants={pathVarients}
            initial="hidden"
            animate="visible"
            d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
          />
        </motion.svg>
        <motion.p
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1, delay: 1 }}
          className="text-size-brand-h3 text-color-brand-pink-500-dark"
        >
          עשיתם את הצעד הראשון לעבר אתר מדהים !
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-size-brand-h6 font-medium">
            תוך 24 שעות אני אצור אתכם קשר
          </p>
          <p className="text-size-brand-h6 font-medium">
            רוצים לדבר איתי לפני? פשוט תגיבו להודעה שתקבלו ממני
          </p>
        </motion.div>
      </div>
    );
  }
}

export default ContactMeForm;
