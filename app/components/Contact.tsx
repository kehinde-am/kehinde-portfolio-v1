// components/Contact.tsx

import Card from './Card';

const Contact = () => {
  return (
    <Card>
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg">Feel free to reach out for collaborations or just a friendly chat.</p>
        <form className="mt-6">
          <input type="text" placeholder="Your Name" className="border p-2 mb-4 w-full" />
          <input type="email" placeholder="Your Email" className="border p-2 mb-4 w-full" />
          <textarea placeholder="Your Message" className="border p-2 mb-4 w-full" rows={5} />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </section>
    </Card>
  );
};

export default Contact;
