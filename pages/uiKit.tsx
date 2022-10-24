import Heading from "../components/Heading";
import Image from "next/image"

const UiKit = () => (
    <>
        <div className={'container'}>
            <Heading text='H2 heading' tag={'h2'}/>
            <Heading text='H3 Welcome, all you passionate Australian online casino players out there.' tag={'h3'}/>

            <button className={'btn-blue__active'}>Blue button</button>
            <button className={'btn-blue'}>Blue button</button>
            <button className={'btn btn-warning'}>Yellow</button>



            {/*<Image src='/ripper.png' alt='Ripper' width={142} height={59}/>*/}
        </div>
    </>
);

export default UiKit;