import PostedJob from "../PostedJob/PostedJob";
import PostedJobDes from "../PostedJob/PostedJobdes";

const PostedJobPage =() => {

   return (
    <div className="min-h-[100vh]  bg-mine-shaft-800 font-['Poppins'] px-4">
      
      {/* <Divider size="xs" /> */}
      <div className="flex ">
        <PostedJob />
        <PostedJobDes />
        
      </div>
    </div>
  );



}

export default PostedJobPage;