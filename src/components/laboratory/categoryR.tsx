export {};
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { useActions, useTypedSelector } from "../../hooks";
// import { LaboratoryBTN } from "./laboratoryBTN";
// import { CategoryBtnList } from "./categoryBtnList";
// import { RGBA, RGB } from "../../tools/rgbToRgba";
// import { laboratoryCategorySetts } from "../../helpers";
//
// export const LaboratoryCategory = () => {
//     const { currentCategory } = useActions();
//     const refs = useRef();
//     const theme = useTypedSelector((state) => state.theme.currentTheme).split(
//         "_"
//     )[0];
//
//     useEffect(() => {
//         laboratoryCategorySetts(theme);
//     });
//     const onHeadClick = (e: any) => {
//         console.log(refs.current);
//         // console.log(e.target.__reactProps$w0t4peozvo.typeof);
//         // const head = headName(e.target.classList[0]);
//         // currentCategory(head, "all");
//     };
//     const onMouseOver = (e: any) => {
//         const btnRGB = gsap.getProperty(e.target, "backgroundColor") as string;
//         if (e.target.classList[0] === "customBTN") {
//             const bg = RGBA(btnRGB, 0.6);
//             gsap.to(e.target, { backgroundColor: bg });
//         }
//         const list = e.target.parentElement
//             ? e.target.parentElement.children[1]
//             : "";
//         if (list) {
//             gsap
//                 .timeline()
//                 .to(list, {
//                     duration: 0.2,
//                     scaleY: 1,
//                     transformOrigin: "top",
//                 })
//                 .to(list.children, {
//                     duration: 0.1,
//                     scale: 1,
//                     transformOrigin: "center",
//                 });
//         }
//     };
//     const onMouseLeave = (e: any) => {
//         const len = e.target.parentElement.children.length;
//         let bgTarget =
//             e.target.children.length > 0
//                 ? e.target.parentElement.children[0]
//                 : e.target.parentElement?.parentElement.children[0];
//         const btnRGB = gsap.getProperty(bgTarget, "backgroundColor") as string;
//         const bg = RGB(btnRGB);
//         gsap.to(bgTarget, { backgroundColor: bg });
//         let list = e.target.parentElement ? e.target.parentElement.children[1] : "";
//
//         if (len >= 4) {
//             list = e.target.parentElement?.parentElement.children[1];
//         }
//         if (list) {
//             gsap
//                 .timeline()
//                 .to(list.children, {
//                     duration: 0.2,
//                     scale: 0,
//                     transformOrigin: "center",
//                 })
//                 .to(list, {
//                     duration: 0.2,
//                     scaleY: 0,
//                     transformOrigin: "top",
//                 });
//         }
//     };
//     return (
//         <div className={"laboratoryCategory"}>
//         <div
//             className={"laboratoryCategory__showAll"}
//     onMouseOver={onMouseOver}
//     onMouseLeave={onMouseLeave}
//     >
//     <LaboratoryBTN
//         name={"show All"}
//     onClick={onHeadClick}
//     type={"all"}
//     createREF={refs}
//     />
//     </div>
//     <div
//     className={"laboratoryCategory__front-end"}
//     onMouseOver={onMouseOver}
//     onMouseLeave={onMouseLeave}
//     >
//     <LaboratoryBTN
//         name={"Front-End"}
//     onClick={onHeadClick}
//     type={"front-end"}
//     createREF={refs}
//     />
//     <CategoryBtnList list={["Javascript", "React", "Html", "Css-Scss"]} />
//     </div>
//     <div
//     className={"laboratoryCategory__back-end"}
//     onMouseOver={onMouseOver}
//     onMouseLeave={onMouseLeave}
//     >
//     <LaboratoryBTN
//         name={"Back-End"}
//     onClick={onHeadClick}
//     type={"back-end"}
//     createREF={refs}
//     />
//     <CategoryBtnList
//     list={["NodeJS", "Php", "Python", "MongoDB", "SQL", "Postgres"]}
//     />
//     </div>
//     <div
//     className={"laboratoryCategory__tools"}
//     onMouseOver={onMouseOver}
//     onMouseLeave={onMouseLeave}
//     >
//     <LaboratoryBTN
//         name={"Tools"}
//     onClick={onHeadClick}
//     type={"tools"}
//     createREF={refs}
//     />
//     <CategoryBtnList list={["Github", "Webstorm", "VSCode", "PyCharm"]} />
//     </div>
//     <div
//     className={"laboratoryCategory__others"}
//     onMouseOver={onMouseOver}
//     onMouseLeave={onMouseLeave}
//     >
//     <LaboratoryBTN
//         name={"Others"}
//     onClick={onHeadClick}
//     type={"others"}
//     createREF={refs}
//     />
//     </div>
//     </div>
// );
// };
