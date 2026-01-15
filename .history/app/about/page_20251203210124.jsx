"use client";
import { motion } from "framer-motion"; 
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

// components
import Stats from "@/components/Stats";

const About = () => {
  return (
    <motion.section  
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, 
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* img & social icons */}
          <div className="hidden xl:flex w-full h-full pt-14 max-w-[430px] relative 
          bg-pink-50/10">
          1
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>Mon profil</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Andry</span> Razafindrabe
              </h2>
              <p className="max-w-[540px] mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minima quam voluptatibus ratione, nihil perferendis at. Eos architecto obcaecati, accusamus eaque sapiente exercitationem ea consequuntur maiores dicta reprehenderit aliquam quaerat facere. Quasi id, ad exercitationem error blanditiis consequatur ipsa, vitae soluta nesciunt obcaecati saepe in tempore. Reprehenderit placeat beatae commodi natus sapiente non temporibus dignissimos, repudiandae mollitia blanditiis itaque sed sunt quaerat corrupti qui officia quam deserunt laboriosam! Eius suscipit cupiditate recusandae sapiente temporibus iure omnis, dolorum distinctio in adipisci enim voluptatibus architecto rem laborum maiores ipsa odio labore, saepe porro vitae eum laboriosam. Necessitatibus illum molestiae incidunt ut veritatis, esse, reiciendis placeat velit vel mollitia commodi cumque ducimus minima voluptates officia molestias. Voluptas voluptate quo cumque quisquam qui mollitia odit soluta, numquam error doloribus tenetur vero dolorem nesciunt illum, corporis maxime facere. Quibusdam, vitae, sequi veritatis deleniti eligendi eaque repellendus nam rerum quas est adipisci sed. Laboriosam adipisci corrupti officiis sint. Itaque laboriosam similique exercitationem corporis commodi corrupti, voluptatem officia voluptatum quia rerum quis hic, quod consectetur perspiciatis sed. Aspernatur quam tenetur necessitatibus alias nesciunt voluptatem quia vel officiis veritatis dolores facilis unde beatae aut, harum ipsa amet molestiae, dolor eum magnam. Unde aliquid ipsum, animi dignissimos vero consequuntur laboriosam, ut officia minus voluptatem, illo non sed in laborum dolores fugit? Omnis, saepe explicabo impedit dolorum error officiis expedita eaque quaerat? Eveniet, distinctio quo minus esse incidunt mollitia eius magni aut nam. Nesciunt tenetur recusandae sint sed debitis, voluptates dolorum, accusantium eaque eligendi quas in itaque, eos praesentium sunt at. Maxime autem, optio labore eum ipsa placeat libero, accusamus, debitis atque illo quibusdam ipsum hic delectus distinctio mollitia nisi repellat minima recusandae ducimus iusto rerum similique incidunt. Sed, hic. Voluptate neque quia aspernatur alias accusamus pariatur consectetur, eligendi repudiandae, quaerat adipisci autem nulla! Adipisci libero provident expedita in, tenetur aspernatur! Minus ducimus velit asperiores natus sit illo fugiat. Odit in hic cum consequuntur expedita. Alias, tenetur praesentium perspiciatis quasi commodi ex illo, voluptas reiciendis recusandae earum totam eius ipsa libero officiis consequuntur labore ullam voluptatibus, rem maiores. Dolorem, voluptate alias nam eius sed architecto est consequatur, quam inventore enim, adipisci aliquam repellat aspernatur atque. Nam placeat architecto molestiae expedita iusto repudiandae corporis, dolor quod accusantium ex, eaque, tempore aut itaque quos et! Illum voluptate facere, harum atque similique rerum debitis! Fuga sed non, explicabo alias tempora necessitatibus doloribus voluptatem dolor rem officia quasi praesentium vero eaque iusto magnam quae dolore. Commodi nulla laudantium, illo saepe explicabo aspernatur ea perferendis nisi harum accusamus? Animi harum pariatur alias ipsum repellendus! Sint laborum ullam modi esse ad fuga labore in enim vel ipsum perspiciatis veniam, cumque obcaecati? Reiciendis perspiciatis sunt quod alias nulla saepe nostrum nam ratione ducimus laboriosam assumenda id et, libero, minima recusandae illo vel illum quam aspernatur similique eum quo. Assumenda hic iste, odit est rerum commodi minus veniam optio itaque, aut veritatis voluptatem, alias aliquid possimus asperiores dolores! Dicta aspernatur soluta illo, commodi aperiam id? Nisi ducimus sit, numquam aut ipsum alias dicta mollitia fugit id, ipsam iste. Eius ipsum distinctio cupiditate sint! Veritatis earum maxime, id rem architecto qui voluptatibus laboriosam odio, in, harum omnis fugiat minus consequatur sed magnam a eos nihil iste mollitia. Corporis, sequi ad, commodi, iusto ipsam quibusdam veniam repellat natus reprehenderit debitis tenetur facere quos dolorum doloremque sint excepturi vitae expedita! Ea quos consequuntur, cumque illo, corrupti tempore sint veniam dignissimos, soluta ipsam adipisci perferendis nobis nostrum voluptates doloremque quia architecto omnis fuga. Quasi fugiat labore maiores rerum sint nam repudiandae optio error! Sed sint optio dolore nihil, dolorum natus deleniti laborum porro ducimus blanditiis accusamus hic distinctio, rerum nostrum quasi adipisci repellat dolores neque tenetur corrupti tempora saepe similique. Officia amet eligendi enim rerum ut error repudiandae vitae laborum earum facilis repellendus, magnam consectetur dicta ea cupiditate numquam! Ipsum sed amet ex, eaque nobis adipisci facere suscipit excepturi ea quas, quibusdam nesciunt distinctio, ab at. Distinctio porro dolorem quaerat esse quibusdam dolor molestiae sit! Sapiente debitis ipsam dolores sint, doloremque esse dolorem vitae ducimus ut saepe facilis eum laudantium voluptas iusto numquam asperiores minus? Tempora veniam fuga consectetur sunt quas recusandae, cumque dolores incidunt deserunt quis numquam eveniet ducimus maiores earum error laudantium inventore labore ratione impedit esse magni temporibus mollitia? Est dignissimos beatae consequuntur sequi aliquam suscipit, animi officia unde iusto doloribus aut ea explicabo sit rerum commodi officiis nesciunt repellat labore quisquam? At, officiis accusamus tempore praesentium corporis assumenda voluptates, illo deserunt distinctio voluptatum perferendis impedit porro exercitationem cupiditate accusantium. Ut voluptate quaerat modi dolorum doloribus impedit laboriosam distinctio consequuntur dolor. Expedita voluptatem repellat perferendis nulla facere ullam cum eveniet impedit beatae aspernatur debitis iusto, ex veniam voluptatum porro numquam dolorum. Repellendus, dolor nihil ullam amet pariatur esse, tenetur veniam quibusdam ab odio deserunt asperiores animi necessitatibus magnam placeat ea quo consectetur distinctio eaque iure. Vel itaque deleniti obcaecati voluptatum iusto quidem odio soluta, omnis, sit laborum qui eveniet adipisci minus rerum eligendi. Ex illo at fuga sint adipisci officiis earum. Nobis ea quos, doloremque veniam eum repudiandae ex pariatur voluptatum quam reprehenderit esse nesciunt, praesentium, laudantium perferendis. Nemo velit molestiae facere, deleniti aliquid similique ut corporis, dolor perferendis dolorum quisquam accusamus quibusdam minus sapiente soluta error autem. Harum deleniti, eum aut veniam minima labore nam quae in modi ut ducimus dolorum ullam laboriosam accusamus necessitatibus ipsum, commodi voluptatibus doloremque magni. Recusandae sunt facere, non eos alias nesciunt, nam amet sequi veniam omnis laboriosam. Quod illum nostrum, reiciendis neque dolorum corrupti nemo suscipit porro! Unde maxime facere aliquam blanditiis rem facilis odio rerum voluptatum temporibus accusamus explicabo debitis provident, labore, dicta possimus pariatur quam illo modi. Corrupti dolorem dolor aut. Eum commodi nesciunt pariatur optio quia officia assumenda obcaecati. Aperiam nostrum ipsa deleniti? Dolorum at non sint aliquid a ducimus amet praesentium sit autem maxime voluptas, nostrum voluptate reiciendis? Sunt consequatur pariatur exercitationem, animi reiciendis consectetur nam enim harum eum aspernatur cupiditate, autem dolorum non? Fugit ipsam fuga quod ullam vero officia quia magni sint? Pariatur quam doloribus necessitatibus, quas eius, provident sapiente saepe aliquid consequuntur, inventore optio magni.
              </p>

              <div className="flex flex-col items-start gap-16">
                <Stats />
                <div>témoignages</div>
                <div>informations</div>
                <div>parcours</div>
                <div>compétences</div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;