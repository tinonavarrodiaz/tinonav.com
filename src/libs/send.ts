// interface Contact {
//   name: string;
//   email: string;
//   phone: string;
//   subject: string;
//   message: string;
// }

// interface Props {
//   form: HTMLFormElement;

// }

import emailjs from '@emailjs/browser';


const loader = `
<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path></svg>
`


export const send = (form: HTMLFormElement)=>{
  emailjs.init({
    publicKey: 'gsZlzMEX_tooIZOst',
  });
  const button = form.querySelector('button') as HTMLButtonElement;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    button.innerHTML = loader;

    const templateParams = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement | null)?.value ?? '',
      message: (form.elements.namedItem('message') as HTMLInputElement).value,
    }
    console.log(templateParams)
    emailjs.send('service_yz38hbj', 'template_nv1n494', templateParams).then(
      (response) => {
        button.disabled = true;
        button.innerHTML = 'Enviado';
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
  })
}
