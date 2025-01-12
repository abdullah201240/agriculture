import React from 'react';

export default function ContactMap() {
  return (
    <div className="relative w-full pb-[56.25%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29204.38161235439!2d90.38594789634143!3d23.799115449284805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c734aabf4565%3A0x4a0c852d9ab982e7!2sDigirib!5e0!3m2!1sen!2sbd!4v1735731421943!5m2!1sen!2sbd"
        className="absolute top-0 left-0 w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        title="Google Map Location"
      ></iframe>
    </div>
  );
}
