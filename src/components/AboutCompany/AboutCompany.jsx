import retroCar from '../../images/retro_car.jpg';
import { AboutBox, IMG } from './About.styled';

const AboutCompany = () => {
  return (
    <AboutBox>
      <div>
        <IMG src={retroCar} alt="retro car" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
          natus voluptatum eaque exercitationem ab qui tempore aliquid eveniet
          cum ut facilis vero in enim corporis nam architecto provident cumque
          beatae.
        </p>
      </div>
    </AboutBox>
  );
};

export default AboutCompany;
