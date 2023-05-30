import BackTitleLayout from "@/components/layouts/BackTitleLayout";
import React from "react";
import style from "styles/pages/cardregister.module.css";

export default function Cardregister() {
  return (
    <main className={style.card_step1}>
      <div className={style.card_info_wrap}>
        <div className={style.card_maxnumber}>
          <p>카드번호 16자리</p>
          <div className={style.card_number_step}>
            <input type="number" maxLength={4} />
            <span>-</span>
            <input type="password" maxLength={4} />
            <span>-</span>
            <input type="password" maxLength={4} />
            <span>-</span>
            <input type="number" maxLength={4} />
          </div>
        </div>
        <div className={style.card_date}>
          <p>유효기간(월/년)</p>
          <div>
            <input type="text" maxLength={2} />
            <span>/</span>
            <input type="text" maxLength={2} />
          </div>
        </div>
        <div className={style.value_number}>
          <p>CVC(3자리)</p>
          <div>
            <input type="password" maxLength={3} />
          </div>
        </div>
      </div>
      <div className={style.select_btn_wrap}>
        <button className={style.select_btn}>등록</button>
      </div>
    </main>
  );
}

Cardregister.getLayout = function getLayout(page: React.ReactNode) {
  return <BackTitleLayout title="카드등록">{page}</BackTitleLayout>;
};

Cardregister.auth = true;
