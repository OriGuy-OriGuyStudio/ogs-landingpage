import React from 'react';

function DiffTitles() {
  return (
    <>
      <h3 className="text-balance text-textsizebrandh2 font-black leading-none md:text-textsizebrandh1">
        מה המבדל אותי מאחרים?
      </h3>
      <h3 className="text-balance text-textsizebrandh2 font-black leading-none md:text-textsizebrandh1">
        זה לא רק האתר,{' '}
        <span className="text-colorBrandPink500dark">זו כל הדרך לשם</span>
      </h3>
      <h4 className="mb-4 mt-2 w-[100%] text-textsizebrandh6 lg:mb-8 lg:mt-4 lg:w-[50%]">
        במקום לזרוק אותך לטופס ולתת לך תוצאה כללית, אני נכנס איתך לעסק, מבין מה
        באמת חשוב ובונה איתך אתר שלא רק נראה טוב, אלא מדבר בדיוק אל האנשים שאתה
        רוצה למשוך.
      </h4>
    </>
  );
}

export default DiffTitles;
