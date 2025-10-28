import { H2Banner, WhiteLink } from "../components/styled/Fonts";
import { BackgroundOriginal, Banner } from "../components/styled/Wrappers";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { BLACK, BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, WHITE } from "../components/styled/Variables";
import CarinaStars from "/carinastars.png"
import { NewsLpImage } from "./News";


export const Form = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
    input::placeholder,
    textarea::placeholder {
      font-family: "Playpen Sans", serif;
      color: ${WHITE};
      font-size: 16px;

}

  .contactInput {
    font-family: "Playpen Sans", serif;
    font-size: 16px;
    line-height: 5px;
    color: ${WHITE};
    border: none;
    outline: none;
    padding: 10px;
    width: 310px;
    border-radius: 10px;

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
    font-family: "Playpen Sans", serif;
    font-size: 16px;
    //line-height: 5px;
    resize: none;
    color: ${WHITE};
    border: none;
    outline: none;
    height: 260px;
    padding: 10px;
    padding-top: 15px;
    width: 310px;
    border-radius: 10px;

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

export const ButtonWrapper = styled.div `
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
  background-color: ${WHITE};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: 0; /* Matchar knappens höjd */
  text-align: center; /* Säkerställer horisontell centrering */
  color: ${BLACK};
  width: 100px;
  height: 35px;
  cursor: pointer;
  cursor: url(${new URL("../../assets/icons/paw_white.png", import.meta.url).href}), auto;

  &:hover {
    background-color: ${WHITE};
    color: ${BLACK};
  }
  &:active {
    background-color: ${WHITE};
    color: ${BLACK};
  }
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 110px;
    }
`;

export const ContactWrapper = styled.div `
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
padding-top: 20px;
`;

export const Contact = () => {
   const { t } = useTranslation();
 /*   const { register, handleSubmit, reset, formState: { errors } } = useForm<Person>();
    const [loading, setLoading] = useState(false);  // State för att hantera spinnern
  const navigate = useNavigate();

        const onSubmit = (data: Person) => {
    setLoading(true);  // Visa spinnern

    console.log("Form data:", data);

    // Använd EmailJS för att skicka formulärdata
  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    data,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
    .then((response) => {
      console.log('E-post skickat:', response);
      reset();
      setLoading(false);
      navigate("/tack");  // Navigera till tack-sidan
    })
    .catch((error) => {
      console.error('E-postfel:', error);
      setLoading(false);
    });
  };*/

    // --------------------- This code enables the page to be in right position when opened ---------------------- // 
  // It is used together with <div id="top"></div> in index.html.
  setTimeout(() => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "auto" });
    }
  }, 0);
  // ---------------------------------------- End of position code ---------------------------------------------- //

return (  <>
  <Banner>
    <H2Banner>{t("header.titleContact")}</H2Banner>
  </Banner> 
  <BackgroundOriginal>
    <ContactWrapper>
    <NewsLpImage src={CarinaStars} loading="lazy"/>
    <div>{t("contact.message")} <WhiteLink   href="https://mail.google.com/mail/?view=cm&fs=1&to=carina.lakosil@gmail.com"
  target="_blank"
  rel="noopener noreferrer"> Carina Stars</WhiteLink>.</div>
    </ContactWrapper>
   
   
   {/*   <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          className="contactInput"
          type="text"
          placeholder="Namn"
          {...register("name", { 
            required: "Namn är obligatoriskt",
            pattern: {
              value: /^[A-Za-z\s]+$/, // Tillåter bara bokstäver och mellanslag
              message: "Endast bokstäver och mellanslag är tillåtna"
            }
          })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div>
        <input
          className="contactInput"
          type="email"
          placeholder="Email - valfritt"
          {...register("email", {
            
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, // Enkel email validering
              message: "Ogiltigt email-format"
            }
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div>
        <textarea
          className="contactTextArea"
          placeholder="Meddelande"
          {...register("message", {
            required: "Meddelande är obligatoriskt",
            minLength: {
              value: 5,
              message: "Meddelandet måste vara minst 5 tecken"
            }
          })}
        />
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>

      <ButtonWrapper>
        <Button type="button" onClick={() => reset()}>Rensa</Button>
        <Button type="submit">Skicka</Button>
      </ButtonWrapper>
    </Form>*/}



  </BackgroundOriginal>

</>
 
)};