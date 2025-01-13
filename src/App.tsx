import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import { appSt } from "./style.css";

import drums from "./assets/drums.png";
import smileArrow from "./assets/smile-arrow.png";
import cashback from "./assets/cashback.png";
import free from "./assets/free.png";
import smart from "./assets/smart.png";
import { useEffect, useState } from "react";
import { Gap } from "@alfalab/core-components/gap";
import { StatusBadge } from "@alfalab/core-components/status-badge";

interface Product {
  title: string;
  text?: string;
  image: string;
}

const products: Array<Product> = [
  {
    title: "+1 топовая категория кэшбэка",
    text: "5%",
    image: smileArrow,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    image: drums,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7000 ₽/мес.",
    image: cashback,
  },
  {
    title: "Специальные предложения от партнеров",
    image: free,
  },
];

export const App = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isGameStopped, setIsGameStopped] = useState(false);
  const [selected, setSelected] = useState<null | number>(null);
  const [initialNumbers, setInitialNumbers] = useState<number[]>([
    35, 32, 25, 41,
  ]);
  const [isSmart, setIsSmart] = useState(false);

  const clickSuccess = () => {
    // window.gtag("event", "prize_page_view", {
    //   variant_name: "ghk_4120_6",
    // });
  };

  const clickSubmit = () => {
    //   window.gtag("event", "prize_get_click", {
    //     variant_name: "ghk_4120_6",
    //   });
  };

  const clickInteraction = () => {
    // window.gtag("event", "game_interaction", {
    //   variant_name: "ghk_4120_6",
    // });
  };

  useEffect(() => {
    if (selected !== null) {
      if (selected === 32) {
        setSuccess(true);
        clickSuccess();
      } else {
        setError(true);
      }
    }
  }, [selected]);

  if (isSmart) {
    return (
      <>
        <div className={appSt.smartContainer}>
          <Gap size={12} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography.TitleResponsive
              font="system"
              tag="h1"
              view="small"
              weight="semibold"
              className={appSt.productsTitle}
            >
              Поздравляем, <br /> вы выиграли приз!
            </Typography.TitleResponsive>
          </div>
          <div className={appSt.smartBox}>
            <img src={smart} alt="Картинка Альфа-Смарт" />
            <Typography.Text view="primary-large" color="primary">
              Альфа-Смарт
            </Typography.Text>
            <Typography.TitleResponsive
              tag="h1"
              view="medium"
              font="system"
              weight="bold"
            >
              1 мес. подписки <br /> бесплатно
            </Typography.TitleResponsive>
          </div>

          <Gap size={8} />

          <div className={appSt.smartProducts}>
            <Typography.TitleResponsive
              font="system"
              tag="h2"
              weight="bold"
              view="small"
              className={appSt.smartProductsTitle}
            >
              Входит в подписку
            </Typography.TitleResponsive>

            {products.map((product, index) => (
              <div className={appSt.smartProduct} key={index}>
                <div>
                  <Typography.TitleResponsive
                    font="system"
                    view="small"
                    weight="bold"
                    tag="h3"
                    className={appSt.smartProductTitle}
                  >
                    {product.title}
                  </Typography.TitleResponsive>

                  {product.text && (
                    <Typography.Text
                      view="secondary-large"
                      tag="p"
                      color="secondary"
                      className={appSt.productText}
                    >
                      {product.text}
                    </Typography.Text>
                  )}
                </div>
                <img
                  src={product.image}
                  alt=""
                  width={96}
                  height={96}
                  className={appSt.productIcon}
                />
              </div>
            ))}
          </div>
          <Typography.Text
            view="primary-medium"
            color="secondary"
            style={{ textAlign: "center" }}
          >
            Это только часть привилегий. Посмотреть все привилегии можно на
            следующей странице.
          </Typography.Text>
        </div>

        <Gap size={96} />

        <div className={appSt.bottomBtnThx}>
          <ButtonMobile
            block
            view="primary"
            href="https://alfa.me/cbpartner"
            onClick={clickSubmit}
          >
            Забрать подписку бесплатно
          </ButtonMobile>
        </div>
      </>
    );
  }

  return (
    <>
      <Gap size={28} />
      <div className={appSt.container}>
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          {success
            ? "Поздравляем, вы выиграли приз!"
            : "Сложите все числа и выиграйте приз"}
        </Typography.TitleResponsive>

        <Gap size={32} />

        {!success && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {[12, "+", 9, "+", 4, "+", 7, "="].map((number, index) => (
              <Typography.Text key={index} weight="bold" view="primary-medium">
                {number}
              </Typography.Text>
            ))}
          </div>
        )}

        <Gap size={40} />

        {success ? (
          <div
            style={{
              border: "2px solid #F2F3F5",
              padding: "1rem",
              boxSizing: "border-box",
              flex: 1,
              width: "100%",
              borderRadius: "16px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <StatusBadge
              view="positive-checkmark"
              size={20}
              className={appSt.checkMark}
            />
            <Typography.Text weight="bold" view="primary-medium">
              {selected}
            </Typography.Text>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
              width: "100%",
            }}
          >
            {initialNumbers.map((number) => (
              <div
                key={number}
                style={{
                  border: "2px solid #F2F3F5",
                  padding: "1rem",
                  boxSizing: "border-box",
                  flex: 1,
                  width: "100%",
                  borderRadius: "16px",
                  textAlign: "center",
                  ...(selected === number &&
                    selected !== 32 && { backgroundColor: "red" }),
                }}
                onClick={() => {
                  if (!isGameStopped) {
                    clickInteraction();
                    setSelected(number);
                    setIsGameStopped(true);
                  }
                }}
              >
                <Typography.Text weight="bold" view="primary-medium">
                  {number}
                </Typography.Text>
              </div>
            ))}
          </div>
        )}

        <Gap size={40} />

        {error && (
          <div style={{ textAlign: "center" }}>
            <Typography.Text
              weight="regular"
              color="negative"
              view="primary-large"
            >
              Близко, но нет. Попробуйте еще раз!
            </Typography.Text>
          </div>
        )}
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtnThx}>
        {success && (
          <ButtonMobile
            block
            view="primary"
            // href="https://alfa.me/cbpartner"
            // onClick={clickSubmit}
            onClick={() => setIsSmart(true)}
          >
            Забрать приз
          </ButtonMobile>
        )}
        {error && (
          <ButtonMobile
            block
            view="primary"
            onClick={() => {
              setError(false);
              setSelected(null);
              setIsGameStopped(false);
              setInitialNumbers(initialNumbers.sort(() => 0.5 - Math.random()));
            }}
          >
            Сыграть ещё
          </ButtonMobile>
        )}
      </div>
    </>
  );
};
