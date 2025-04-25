'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SendHorizontal } from 'lucide-react';
import { LazyMotion, domAnimation, m } from 'motion/react';
import axios from 'axios';

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
    async onSubmit(values) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.8 },
      });
      await axios.post(process.env.MAKE_URL || '', {
        name: values.name,
        tel: values.tel,
        email: values.email,
      });
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
          <label className="text-textsizebrandh6 font-extrabold" htmlFor="text">
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
            className="h-10 w-full rounded-lg bg-colorBrandCyan200light px-2 text-colorBrandPurple900dark"
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="text-textsizebrandh6 font-black text-colorBrandRed400light">
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col items-start justify-start gap-2 text-right">
          <label className="text-textsizebrandh6 font-extrabold" htmlFor="tel">
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
            className="h-10 w-full rounded-lg bg-colorBrandCyan200light px-2 text-right text-colorBrandPurple900dark"
          />
          {formik.errors.tel && formik.touched.tel ? (
            <div className="text-textsizebrandp font-black text-colorBrandRed400light">
              {formik.errors.tel}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col items-start justify-start gap-2 text-right">
          <label className="text-textsizebrandp font-extrabold" htmlFor="email">
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
            className="h-10 w-full rounded-lg bg-colorBrandCyan200light px-2 text-colorBrandPurple900dark"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-textsizebrandp font-black text-colorBrandRed400light">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <LazyMotion features={domAnimation}>
          <m.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1, type: 'spring' }}
            whileTap={{
              scale: 0.95,
              rotate: -1,
              transition: { duration: 0.12 },
            }}
            className="mt-4 flex w-2/4 flex-row items-center justify-center gap-2 rounded-xl bg-colorBrandPink500dark px-2 py-2 text-textsizebrandh6 font-black lg:w-2/4"
            type="submit"
          >
            אורי, דבר איתי{' '}
            <m.span
              initial={{ rotate: '180deg' }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.75 }}
            >
              <SendHorizontal />
            </m.span>
          </m.button>
        </LazyMotion>
      </form>
    );
  } else {
    return (
      <div className="mt-8 flex flex-col items-start justify-start gap-4 text-pretty text-right font-black lg:mt-8 lg:w-3/4 lg:items-start lg:justify-start lg:text-right">
        <LazyMotion features={domAnimation}>
          <m.svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            // stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-party-popper-icon lucide-party-popper stroke-2"
            variants={svgVarients}
            initial="hidden"
            animate="visible"
          >
            <m.path
              variants={pathVarients}
              initial="hidden"
              animate="visible"
              d="M5.8 11.3 2 22l10.7-3.79"
            />
            <m.path
              variants={pathVarients}
              initial="hidden"
              animate="visible"
              d="M4 3h.01"
            />
            <m.path
              variants={pathVarients}
              initial="hidden"
              animate="visible"
              d="M22 8h.01"
            />
            <m.path
              variants={pathVarients}
              initial="hidden"
              animate="visible"
              d="M15 2h.01"
            />
            <m.path
              variants={pathVarients}
              initial="hidden"
              animate="visible"
              d="M22 20h.01"
            />
            <m.path
              variants={pathVarients}
              initial="hidden"
              animate="visible"
              d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
            />
            <m.path
              variants={pathVarients}
              initial="hidden"
              animate="visible"
              d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"
            />
            <m.path
              variants={pathVarients}
              initial="hidden"
              animate="visible"
              d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"
            />
            <m.path
              variants={pathVarients}
              initial="hidden"
              animate="visible"
              d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
            />
          </m.svg>
          <m.p
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1, delay: 1 }}
            className="text-textsizebrandh3 text-colorBrandPink500dark"
          >
            עשיתם את הצעד הראשון לעבר אתר מדהים !
          </m.p>
          <m.div
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
            <p className="text-textsizebrandh6 font-medium">
              תוך 24 שעות אני אצור אתכם קשר
            </p>
            <p className="text-textsizebrandh6 font-medium">
              רוצים לדבר איתי לפני? פשוט תגיבו להודעה שתקבלו ממני
            </p>
          </m.div>
        </LazyMotion>
      </div>
    );
  }
}

export default ContactMeForm;
