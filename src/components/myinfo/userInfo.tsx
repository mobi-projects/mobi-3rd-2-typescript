type userInfo = {
    nickName: string;
    userId: string;
};

const UserInfo = ({ nickName, userId }: userInfo) => {
    return (
        <div className="w-[600px] h-[300px] bg-SYSTEM-white ml-8 rounded-xl flex justify-center items-center flex-col p-4">
            <p className="text-lg pb-4">회원정보</p>
            <div className="w-[90%] h-[200px] border-2 border-COMMON-light_gray rounded-xl flex flex-col justify-center">
                <div className="w-full flex flex-row  justify-start items-center pt-4">
                    <p className="text-lg pl-4">닉네임 :</p>
                    <p className="w-[300px] text-lg text-center">{nickName}</p>
                    <button className="">수정</button>
                </div>
                <div className="w-full flex flex-row  justify-start items-center pt-4">
                    <p className="text-lg pl-4">아이디 :</p>
                    <p className="w-[300px] text-lg text-center">{userId}</p>
                </div>
                <div className="w-full flex flex-row  justify-center items-center pt-4">
                    <button className="w-[184px] text-lg p-2">로그아웃</button>
                </div>
            </div>
        </div>
    );
};
export default UserInfo;