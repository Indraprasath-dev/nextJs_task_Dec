"use client";
import "../styles/member.css";
import "../styles/loader.css"
import usePagination from "@/hooks/usePagination";
import Card from "./memberCard";
import Loader from "./loader";

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

interface MemberProps {
    initialData: User[];
}

const Member = ({initialData}: MemberProps) => {


    const {users, loading} = usePagination(initialData);
    
    // useEffect(() => {
    //     if (scrollContainerRef.current) {
    //         scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    //     } else {
    //         window.scrollTo({ top: 0, behavior: "smooth" });
    //     }
    // }, [JSON.stringify(filters)]);

    return (
        <div className="member__card-wrapper">
        {/* </div><div key={JSON.stringify(filters)}  className="member__card-wrapper"> */}
            <div className="">
                {loading && <Loader />}
            </div>
            <div className="member__card">
                {users.map((item) => (
                    <Card key={`${item.uid}`} member={item} />
                ))}
                <div id="scroll-trigger" className="infinite__scroll-trigger"></div>
            </div>
            
        </div>
    )
};

export default Member;
