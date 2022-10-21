import Heading from "../components/Heading";
import Image from "next/image"

const Faq = () => (
    <>
        <Heading text='FAQ'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Image src='/ripper.png' alt='Ripper' width={142} height={59} placeholder='blur'/>
    </>
);

export default Faq;