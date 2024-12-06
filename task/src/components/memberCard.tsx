import { MAX_VISIBLE_SKILLS } from "@/constants/constants";

interface Skill {
    uid: string;
    title: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
}

interface User {
    uid: string;
    name: string;
    skills: Skill[];
    region?: string;
    country?: string;
}

interface MemberListProps {
    member: User;
}

const Card = ({ member }: MemberListProps) => {

    return (
        <div className="member__list card">
            <div className="member__image-container">
                <div className="member__image">
                    <img src="./photo.jpg" alt="photo" />
                </div>
            </div>
            <div className="member__details">
                <div className="member__name">{member.name}</div>
                <div className="member__department">{member.region}</div>
                <div className="member__department">{member.country}</div>
            </div>
            <div className="member__divider"></div>
            <div className="member__product-container">
                <span className="member__product-span"></span>

                <div className="member__product-container-upt tooltip">
                    {member.skills.slice(0, MAX_VISIBLE_SKILLS).map((skill) => (
                        <div className="member__product" key={skill.uid}>
                            {skill.title}
                        </div>
                    ))}
                    {member.skills.length > MAX_VISIBLE_SKILLS && (
                        <div className="member__product tooltip">
                            +{member.skills.length - MAX_VISIBLE_SKILLS}
                            <div className="tooltiptext">
                                {member.skills.slice(MAX_VISIBLE_SKILLS).map((skill) => (
                                    <div key={skill.uid}>{skill.title}</div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
};

export default Card;


{/* <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => {
                        console.log(skill.title); 
                        return (
                            <div className="member__product" key={skill.uid}>
                                {skill.title}
                            </div>
                        );
                    })}
                </div> */}

{/* <div className="member__product-container-upt">
                    {member.skills.slice(0, MAX_VISIBLE_SKILLS).map((skill) => (
                        <div className="member__product" key={skill.uid}>
                            {skill.title}
                        </div>
                    ))}
                    {member.skills.length > MAX_VISIBLE_SKILLS && (
                        <div className="member__product more-count tooltip">
                            +{member.skills.length - MAX_VISIBLE_SKILLS}
                            <span className="tooltiptext">
                                {member.skills.slice(MAX_VISIBLE_SKILLS).map((skill) => (
                                    <div key={skill.uid}>{skill.title}</div>
                                ))}
                            </span>
                        </div>
                    )}
                </div> */}