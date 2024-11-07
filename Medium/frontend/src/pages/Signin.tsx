import Auth from "../components/Auth";
import Label from "../components/Label";

const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Auth type="signin" />
      </div>

      <div className="hidden lg:block">
        <Label />
      </div>
    </div>
  );
};

export default Signin;
