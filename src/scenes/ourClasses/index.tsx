import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from '@/assets/image2.png';
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from './class';

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "Find your inner peace and flexibility with our calming yoga classes. Choose from Vinyasa Flow, Hatha, or restorative options.",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "Develop a Strong Core: Strengthen your core muscles for improved balance, posture, and overall stability.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "Improve Cardiovascular Health: Engage in activities that elevate your heart rate and improve cardiovascular fitness. Also step outside your comfort zone and try exciting new activities",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "Improve Overall Fitness: Enhance your cardiovascular health, strength, flexibility, and endurance. We also have a wide range of fitness activities to keep your workout interesting.",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "Personalized Attention: Receive one-on-one or small group training tailored to your specific goals. We also provide trainers who can help you stay accountable and provided the needed support to get you going.",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void; 
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div 
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div 
                className="mx-auto w-5/6"
                initial='hidden'
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}
                >
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">At Evogym we believe in personalized fitness tailored to your unique goals and lifestyle. Our team of experienced instructors offers a wide range of classes designed to challenge, inspire, and help you reach your full potential.
                            Join us today and experience the transformative power of our classes. Whether you're a fitness enthusiast or just starting your journey, we have something for everyone.
                        </p>
                    </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses;