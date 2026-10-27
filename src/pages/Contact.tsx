import { H2Banner } from "../components/styled/Fonts";
import { BackgroundOriginal, Banner, ContactFormWrapper } from "../components/styled/Wrappers";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { BLACK, BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, DARKPINK, LIGHTPINK, LIGHTPURPLE, REDERROR, WHITE } from "../components/styled/Variables";
import CarinaStars from "/carinastars.png";
import { useEffect, useState } from "react";
import type { Person } from "../components/models/Person";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  position: relative;
  z-index: 10;
  pointer-events: auto;
  
  input::placeholder,
  textarea::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    color: ${LIGHTPURPLE};
    font-size: 14px;
    font-weight: 500;
    transition: color 0.1s ease; /* Gör övergången mjuk */
  }
  /* DETTA GÖR ATT PLACEHOLDERN FÖRSVINNER DIREKT VID KLICK (FOKUS) */
  input:focus::placeholder,
  textarea:focus::placeholder {
    color: transparent;
  }
  .contactInput {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: ${LIGHTPURPLE};
    border: none;
    outline: none;
    padding: 10px;
    width: 310px;
    border-radius: 5px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 400px;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 460px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 470px;
    }
  }

  .contactTextArea {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    resize: none;
    color: ${LIGHTPURPLE};
    border: none;
    outline: none;
    height: 260px;
    padding: 10px;
    padding-top: 15px;
    width: 310px;
    border-radius: 5px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 400px;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 460px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 470px;
    }
  }
  
  .error {
    color: ${REDERROR};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin: 4px 0 0 0;
    text-align: left;
    width: 310px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 400px;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 460px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 470px;
    }
  }
`;


export const ButtonWrapper = styled.div`
  padding-bottom: 5px;
  padding-left: 0;
  padding-top: 20px;

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    display: flex;
    flex-direction: row;
    gap: 25px;
  }
`;

export const Button = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  border: none;
  border-radius: 12px;
  background-color: ${DARKPINK};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: normal; /* Fixad från 0 */
  text-align: center;
  color: ${WHITE};
  width: 100px;
  height: 35px;
  cursor: pointer;

  &:hover {
    background-color: ${DARKPINK};
    color: ${BLACK};
  }
  &:active {
    background-color: ${LIGHTPINK};
    color: ${WHITE};
  }
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 110px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  position: relative;
  //border: 1px solid red;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 600px;
    padding-top: 30px;
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 700px;
    padding-top: 60px;
  }
`;

export const ContactImage = styled.img`
  width: 200px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 200px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 150px;
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 400px;
    padding-top: 90px;
  }
`;

export const Contact = () => {
  const { t } = useTranslation();

    // --------------------- This code enables the page to be in right position when opened ---------------------- // 
  // It is used together with <div id="top"></div> in index.html. Scrolls to top only with first mount, not in external clicks.
  useEffect(() => {
  const topElement = document.getElementById("top");
  if (topElement) {
    topElement.scrollIntoView({ behavior: "auto" });
  }
}, []); // Körs EN gång när sidan laddas
  // ---------------------------------------- End of position code ---------------------------------------------- //

  const [isSent, setIsSent] = useState(false);
  // 1. Skapa hooken först så att reset och register existerar
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Person>();
  const [loading, setLoading] = useState(false);


  // 2. Nu kan handleClear ligga här under och använda reset() säkert!
  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault();
    reset();
   // --- Detta gör så att sidan blir uppscrollad när man klickar på rensaknappen kommer --- //
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "auto" });
    }
    // ----------------------------- slut på kod ------------------------------ //

  };

  const onSubmit = (data: Person) => {
    setLoading(true);
    console.log("Form data:", data);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      data,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    ).then((response) => {
      console.log('E-post skickat:', response);
      reset();
      setLoading(false);
      setIsSent(true);  // Visar "Message was sent successfully"

    // --- Detta gör så att sidan blir uppscrollad när successfull-meddelandet kommer --- //
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "auto" });
    }
    // ----------------------------- slut på kod ------------------------------ //
    })
    .catch((error) => {
      console.error('E-postfel:', error);
      setLoading(false);
    });
  };

  useEffect(() => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  return (
    <>
      <Banner>
        <H2Banner>{t("header.titleContact")}</H2Banner>
      </Banner>
      <BackgroundOriginal>
        <ContactWrapper>
          {/*<ContactImage src={CarinaStars} loading="lazy" />
          <div>
            <WhiteLink href="https://mail.google.com/mail/?view=cm&fs=1&to=carina.lakosil@gmail.com" target="_blank" rel="noopener noreferrer">
              Carina Stars
            </WhiteLink>.
          </div>*/}

{isSent ? (
  <div style={{ textAlign: 'center', padding: '20px', color: WHITE }}>
     <ContactImage src={CarinaStars} loading="lazy"></ContactImage>
    <h3>Message was sent successfully</h3>
    <Button type="button" onClick={() => setIsSent(false)}>Go Back</Button>
  </div>
) : (
  <div>
  <ContactFormWrapper>{t("contact.message")}</ContactFormWrapper>
  <Form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <input
        className="contactInput"
        type="text"
        placeholder="Name"
        {...register("name", {
          required: "Name required",
          pattern: {
            value: /^[A-Za-zåäöÅÄÖ\s]+$/, 
            message: "Only letters and spaces are allowed"
          }
        })}
      />
      {errors.name && <p className="error">{errors.name.message}</p>}
    </div>
    <div>
      <input
        className="contactInput"
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email required",
          pattern: {
            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            message: "Please enter a valid email address"
          }
        })}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}
    </div>

    <div>
      <textarea
        className="contactTextArea"
        placeholder="Write a message to Carina"
        {...register("message", {
          required: "Message required",
          minLength: {
            value: 5,
            message: "Message must be at least 5 characters"
          }
        })}
      />
      {errors.message && <p className="error">{errors.message.message}</p>}
    </div>

    <ButtonWrapper>
      <Button type="button" onClick={handleClear}>Rensa</Button>
      <Button type="submit" disabled={loading}>
        {loading ? "Skickar..." : "Skicka"}
      </Button>
    </ButtonWrapper>
  </Form>
  </div>
)}

        </ContactWrapper>
      </BackgroundOriginal>
    </>
  );
};
