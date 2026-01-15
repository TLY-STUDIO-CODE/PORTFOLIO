"use client";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";

import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2"
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi"

const Contact = () => {
  return (
    <motion.section  
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, 
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >

    <div class="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll 
    xl:overflow-y-visible">
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit earum, provident at dolor obcaecati, nemo fuga ullam, architecto eius sunt. Harum ut sunt quod exercitationem aut eaque alias facere pariatur inventore deserunt iusto reprehenderit, illo cum expedita iure dolorum doloribus voluptas autem cumque beatae laudantium repellat quos quis! Facere sequi, amet doloribus dicta laboriosam ad magnam commodi! Sint eos corrupti in ex facilis modi quis velit tempora voluptatibus veritatis blanditiis, hic quasi ut aliquam esse sed alias debitis dolores sit? Voluptatem, reprehenderit veniam. Ipsa quasi doloremque debitis voluptatibus nemo, iste illum quidem aspernatur, asperiores minus illo repellat ex culpa. Asperiores natus voluptatum reiciendis ea consequatur architecto modi, excepturi repellat nisi ullam dolor id beatae amet quo, sunt qui inventore harum. Nam fuga nihil nesciunt beatae optio animi asperiores quo, autem odio rem enim! Ratione, quod laudantium omnis odit aliquam esse quo odio provident dicta, officia vitae minima ut dolore consequuntur, optio voluptate. Dignissimos officiis aspernatur, laudantium nisi sequi minima expedita. Saepe, est inventore? Quam, libero at, laborum hic obcaecati illum facere sequi nemo sed et dolor quis sunt magni delectus saepe ullam ut aspernatur officiis veritatis molestiae unde consequatur quaerat dolores? Nesciunt ipsa error perferendis odio, mollitia, eligendi architecto obcaecati, sint quae quidem cum ratione pariatur in aliquam sapiente reprehenderit voluptates ea? Dolorum voluptatum blanditiis nobis voluptas numquam fugit alias deserunt, illo sapiente nulla quaerat doloribus labore ipsa similique amet dignissimos nemo eos debitis. Amet eius animi dolores nisi nam! Ex, voluptas, impedit eligendi qui fugit esse voluptatibus velit, dolore excepturi alias laudantium magni nisi autem necessitatibus suscipit sunt. Quas illo architecto tempore veniam ullam beatae est dolorem optio adipisci voluptate. Vero fugiat dolorem unde quisquam aliquid in sit beatae impedit recusandae neque aspernatur, debitis doloribus quos eius laudantium doloremque ullam minima inventore amet voluptatibus aut aliquam nisi cumque laborum. Ad dignissimos libero corporis officia delectus, eligendi consectetur, quos ratione perspiciatis, dolorem cumque quidem. Temporibus facere ad saepe cupiditate inventore sunt architecto magnam est maxime ipsa quam, ducimus rem placeat eaque debitis autem iure suscipit nesciunt at dolore odio laborum? Voluptas modi culpa hic similique enim, ipsam, laboriosam ratione ab quidem iste aliquid ducimus blanditiis beatae tempora unde itaque rerum ipsa corporis! Sapiente laboriosam soluta at assumenda, unde ducimus tempora, sequi rem suscipit quam iure voluptatem doloribus ullam accusantium itaque ut, tenetur corporis earum! Odio natus ipsa reiciendis sunt, illo architecto facere asperiores officia sint accusamus quo fuga recusandae, tempora neque facilis tempore dignissimos ex fugit, iusto perferendis? Esse iste, officiis quisquam quidem fugiat, eius inventore repellendus quaerat corrupti quia iusto est laborum ipsa alias ducimus soluta quo maxime perferendis voluptatem deleniti ut minus dicta? Obcaecati tempora, rerum eos provident deleniti numquam ducimus quis explicabo praesentium vero! Earum facilis sequi dolorem ipsa illo modi asperiores quas dolore quaerat enim aperiam autem voluptatem dolorum quos non ullam molestias mollitia dolor, est voluptate ratione, numquam possimus! Corporis, soluta, eius sit natus necessitatibus porro quisquam nesciunt aperiam dolorem sapiente accusamus et quibusdam doloribus dicta repellendus consequuntur amet, at laboriosam neque possimus maxime?
      </p>
    </div>
    </motion.section>
  );
};

export default Contact;