import CustomLink from "@/app/components/UI/CustomLink";
import Wrapper from "@/app/components/layout/Wrapper";

type Props = {
    item: { id: string; title: string; img: string; desc: string };
    index: number;
    reversed: boolean;
};

const ProjectSection: React.FC<Props> = ({ item, reversed, index }) => {
    return (
        <section className="sectionX">
            <Wrapper
                className={`flex flex-col items-center md:flex-row md:gap-14 xl:gap-28 ${reversed && "lg:justify-end"}`}
            >
                <img
                    src={item.img}
                    alt=""
                    className={`mb-8 block w-full max-w-[311px] rounded-sm md:mb-0 md:max-w-[339px] lg:max-w-[540px] ${reversed && "lg:order-2"}`}
                />
                <div
                    className={`lines flex max-w-96 flex-col justify-center gap-6 md:max-w-md lg:max-w-[350px] lg:self-stretch  ${reversed && "lg:order-1"}`}
                >
                    <h2 className="mb-2 text-40 text-GraylishDarkBlue">
                        {item.title}
                    </h2>
                    <p className="text-justify text-15 leading-7 text-GraylishDarkBlue">
                        {item.desc}
                    </p>
                    <CustomLink
                        onClick={() => {
                            sessionStorage.setItem(
                                "curIndex",
                                index.toString(),
                            );
                        }}
                        href={`/portfolio/${item.id}`}
                        aria-label="view project"
                    >
                        view project
                    </CustomLink>
                </div>
            </Wrapper>
        </section>
    );
};

export default ProjectSection;