import { Footer } from "@/widgets/layout";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import emailjs from 'emailjs-com';
import 'leaflet/dist/leaflet.css';
import { useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const center = {
  lat: 3.2783, // Approximate latitude for Kitgum
  lng: 32.8867, // Approximate longitude for Kitgum
};

export function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // emailjs.send("service_8v6syun","template_ou88xf5",{
    //     first_name: "Banadda",
    //     last_name: "Mubaraka",
    //     message: "Hello",
    //     from_email: "mubaraka.banadda@students.mak.ac.ug",
    //     reply_to: "mubaraka.banadda@students.mak.ac.ug",
    //     });

    const templateParams = {
      first_name: form.current.first_name.value,
      last_name: form.current.last_name.value,
      from_email: form.current.from_email.value,
      message: form.current.message.value,
      reply_to: form.current.from_email.value,
    };

    emailjs.send('service_8v6syun', 'template_ou88xf5', templateParams, '8XQcAphyr4W8Y4DCs')
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          toast.success("Your email has been sent successfully!");
          form.current.reset(); // Clear the form
      }, (error) => {
          console.log(error.text);
          setLoading(false);
          toast.error("An error occurred, please try again.");
      });
  };

  return (
    <>
      <section className="px-8 lg:pb-10 lg:pt-40">
        <div className="container mx-auto text-center">
          <Typography variant="h1" color="blue-green" className="mb-4 !text-bold lg:!text-5xl">APSEDEC</Typography>
          <Typography variant="h4" color="blue-green" className="mb-4 !text-3xl lg:!text-3xl">We&apos;re Here to Help</Typography>
          <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-green-500">
            Whether it&apos;s a question about our services, a request for technical assistance, or suggestions for improvement, our team is eager to hear from you.
          </Typography>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
            <div className="flex w-full h-full lg:max-h-[510px]">
              <MapContainer center={center} zoom={10} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                <Marker position={center}>
                  <Popup>
                    APSEDEC is here! <br /> We're eager to help.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 lg:max-w-sm">
              <Typography variant="small" className="text-left !font-semibold !text-green-600">
                Contact Us today for Business Engagement
              </Typography>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Typography variant="small" className="mb-2 text-left font-medium !text-green-900">
                    First Name
                  </Typography>
                  <Input
                    color="green"
                    size="lg"
                    placeholder="First Name"
                    name="first_name"
                    className="focus:border-t-green-900"
                    containerProps={{ className: "min-w-full" }}
                    labelProps={{ className: "hidden" }} />
                </div>
                <div>
                  <Typography variant="small" className="mb-2 text-left font-medium !text-green-900">
                    Last Name
                  </Typography>
                  <Input
                    color="green"
                    size="lg"
                    placeholder="Last Name"
                    name="last_name"
                    className="focus:border-t-green-900"
                    containerProps={{ className: "!min-w-full" }}
                    labelProps={{ className: "hidden" }} />
                </div>
              </div>
              <div>
                <Typography variant="small" className="mb-2 text-left font-medium !text-green-900">
                  Your Email
                </Typography>
                <Input
                  color="green"
                  size="lg"
                  placeholder="name@email.com"
                  name="from_email"
                  className="focus:border-t-green-900"
                  containerProps={{ className: "!min-w-full" }}
                  labelProps={{ className: "hidden" }} />
              </div>
              <div>
                <Typography variant="small" className="mb-2 text-left font-medium !text-green-900">
                  Your Message
                </Typography>
                <Textarea
                  rows={6}
                  color="green"
                  placeholder="Message"
                  name="message"
                  className="focus:border-t-green-900"
                  containerProps={{ className: "!min-w-full" }}
                  labelProps={{ className: "hidden" }} />
              </div>
              <Button type="submit" className="w-full" color="green" disabled={loading}>
                {loading ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
      <div id="contact-us" className=" bg-black">
        <Footer />
      </div>
    </>
  );
}

export default Contact;

// import { Footer } from "@/widgets/layout";
// import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
// import emailjs from 'emailjs-com';
// import 'leaflet/dist/leaflet.css';
// import { useRef, useState } from 'react';
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const center = {
//   lat: 3.2783, // Approximate latitude for Kitgum
//   lng: 32.8867, // Approximate longitude for Kitgum
// };

// export function Contact() {
//   const form = useRef();
//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs.sendForm('service_8v6syun', 'template_ou88xf5', form.current, '8XQcAphyr4W8Y4DCs')
//       .then((result) => {
//           console.log(result.text);
//           setLoading(false);
//           toast.success("Your message has been sent successfully!");
//           form.current.reset(); // Clear the form
//       }, (error) => {
//           console.log(error.text);
//           setLoading(false);
//           toast.error("An error occurred, please try again.");
//       });
//   };

//   return (
//     <>
//       <section className="px-8 lg:pb-10 lg:pt-40">
//         <div className="container mx-auto text-center">
//           <Typography variant="h1" color="blue-green" className="mb-4 !text-bold lg:!text-5xl">APSEDEC</Typography>
//           <Typography variant="h4" color="blue-green" className="mb-4 !text-3xl lg:!text-3xl">We&apos;re Here to Help</Typography>
//           <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-green-500">
//             Whether it&apos;s a question about our services, a request for technical assistance, or suggestions for improvement, our team is eager to hear from you.
//           </Typography>
//           <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
//             <div className="flex w-full h-full lg:max-h-[510px]">
//               <MapContainer center={center} zoom={10} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
//                 <TileLayer
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
//                 <Marker position={center}>
//                   <Popup>
//                     APSEDEC is here! <br /> We're eager to help.
//                   </Popup>
//                 </Marker>
//               </MapContainer>
//             </div>
//             <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 lg:max-w-sm">
//               <Typography variant="small" className="text-left !font-semibold !text-green-600">
//                 Contact Us today for Business Engagement
//               </Typography>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Typography variant="small" className="mb-2 text-left font-medium !text-green-900">
//                     First Name
//                   </Typography>
//                   <Input
//                     color="green"
//                     size="lg"
//                     placeholder="First Name"
//                     name="first_name"
//                     className="focus:border-t-green-900"
//                     containerProps={{ className: "min-w-full" }}
//                     labelProps={{ className: "hidden" }} />
//                 </div>
//                 <div>
//                   <Typography variant="small" className="mb-2 text-left font-medium !text-green-900">
//                     Last Name
//                   </Typography>
//                   <Input
//                     color="green"
//                     size="lg"
//                     placeholder="Last Name"
//                     name="last_name"
//                     className="focus:border-t-green-900"
//                     containerProps={{ className: "!min-w-full" }}
//                     labelProps={{ className: "hidden" }} />
//                 </div>
//               </div>
//               <div>
//                 <Typography variant="small" className="mb-2 text-left font-medium !text-green-900">
//                   Your Email
//                 </Typography>
//                 <Input
//                   color="green"
//                   size="lg"
//                   placeholder="name@email.com"
//                   name="email"
//                   className="focus:border-t-green-900"
//                   containerProps={{ className: "!min-w-full" }}
//                   labelProps={{ className: "hidden" }} />
//               </div>
//               <div>
//                 <Typography variant="small" className="mb-2 text-left font-medium !text-green-900">
//                   Your Message
//                 </Typography>
//                 <Textarea
//                   rows={6}
//                   color="green"
//                   placeholder="Message"
//                   name="message"
//                   className="focus:border-t-green-900"
//                   containerProps={{ className: "!min-w-full" }}
//                   labelProps={{ className: "hidden" }} />
//               </div>
//               <Button type="submit" className="w-full" color="green" disabled={loading}>
//                 {loading ? 'Sending...' : 'Send message'}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </section>
//       <ToastContainer />
//       <div id="contact-us" className=" bg-black">
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Contact;
