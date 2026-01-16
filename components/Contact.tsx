import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <section id="contact" >
            <div className="h-dvh pt-10 md:pt-44" >

                <div className="container mx-auto bg-alt border-zinc-900 border-0 md:border-2 rounded-2xl">
                    <div className="flex p-6 md:flex-row flex-col gap-2">

                        <div className="basis-1/2  p-6 place-content-center">
                            <div className="flex">
                                <div>
                                    <FontAwesomeIcon icon={faEnvelope} size="8x" />
                                </div>
                                <div className="content-center px-4">
                                    <span className="border-l-2 pl-2 mb-4 border-l-secondary font-bold">Email:</span> <br />
                                    <span className="font-medium">hello@lexxchaplin.com</span>
                                </div>
                            </div>
                            <div className="flex">
                                <div>
                                    <FontAwesomeIcon icon={faLinkedin} size="8x" />
                                </div>
                                <div className="content-center px-4">
                                    <span className="border-l-2 pl-2 border-l-tertiary font-bold">LinkedIn:</span> <br />
                                    <a href="https://www.linkedin.com/in/lexxchaplin/" >linkedin.com/in/lexxchaplin</a>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col justify-center items-center"><h2 className=" text-4xl font-medium title-font">
                            Contact Me
                        </h2>
                            <p className="mt-1 mb-5 font-medium text-lg">
                                <span className="text-tertiary mr-2"><FontAwesomeIcon size="lg" icon={faCode} /></span>Let's build  something <span className=" underline decoration-secondary decoration-2 font-bold">amazing</span> together!
                            </p>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}
