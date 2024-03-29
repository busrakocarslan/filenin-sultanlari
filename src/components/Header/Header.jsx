import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <Container className="text-center mt-5">
      {/* <Image src={logo} width="200px" /> */}
      <h1 className="my-2 title">FİLENİN SULTANLARI</h1>
    </Container>
  );
};

export default Header;
