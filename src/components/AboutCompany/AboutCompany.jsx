import retroCar from '../../images/retro_car.jpg';
import sportCar from '../../images/sport-4155825_1280.jpg';
import offRoad from '../../images/jeep-7853620_1920.jpg';
import { AboutBox, CardBox, CardList, CardText, IMG } from './About.styled';

const AboutCompany = () => {
  return (
    <AboutBox>
      <CardList>
        <CardBox>
          <IMG src={retroCar} alt="retro car" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
            natus voluptatum eaque exercitationem ab qui tempore aliquid eveniet
            cum ut facilis vero in enim corporis nam architecto provident cumque
            beatae.
          </CardText>
        </CardBox>
        <CardBox>
          <IMG src={sportCar} alt="sport car" />
          <CardText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            modi officiis ullam ratione repellat sed eaque, excepturi, eos
            eveniet blanditiis ex temporibus sapiente accusamus unde nobis
            perspiciatis esse tenetur eligendi?
          </CardText>
        </CardBox>
        <CardBox>
          <IMG src={offRoad} alt="offroad car" />
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            explicabo accusamus architecto eligendi non tempora velit iste minus
            provident aut quam, omnis adipisci, consequatur quisquam odit
            repellat quasi? Vitae, laborum?
          </CardText>
        </CardBox>
      </CardList>
    </AboutBox>
  );
};

export default AboutCompany;
