import React from 'react';
import CardCompany from 'src/components/card/CardCompany';
import CardIcon from 'src/components/card/CardIcon';
import CardMember from 'src/components/card/CardMember';
import CardNews from 'src/components/card/CardNews';
import SliderSimple from 'src/components/slider/SliderSimple';
import Banner from '../../components/banner/Banner';
import Button from '../../components/button/Button';
import CardImage from '../../components/card/CardImage';
import CardProduct from '../../components/card/CardProduct';
import CardStatistic from '../../components/card/CardStatistic';
import List from '../../components/list/List';
import Section from '../../components/section/Section';

const HomePage = () => {
  return (
    <>
      <Banner>
        <Banner.Text
          titleLight="The easiest way"
          titleDark="to source custom parts"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra adipiscing quam ut felis tellus, at."
          action={
            <Button size="lg" color="primary">
              Get an instant quote
            </Button>
          }
        />
        <Banner.Img
          src="https://v1hubstorage.blob.core.windows.net/banner/Printer%201-02ea994a-89cd-4cee-9778-824c1d3ebdca.png"
          alt="image"
        />
      </Banner>

      <Section className="home-product" title="3D Priting Service">
        <div className="container row-gap-5">
          <div className="row row-gap-5">
            <div className="col-md-12 col-lg-4">
              <CardProduct
                src="https://v1hub.com/assets/images/home/FDM1.png"
                title="Hightlight Product 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
            <div className="col-md-12 col-lg-4">
              <CardProduct
                src="https://v1hub.com/assets/images/home/SLS_2.png"
                title="Hightlight Product 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
            <div className="col-md-12 col-lg-4">
              <CardProduct
                src="https://v1hub.com/assets/images/home/SLA.png"
                title="Hightlight Product 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
          </div>
          <div className="mt-2 text-center">
            <Button color="primary" size="lg">
              Get an instant quote
            </Button>
          </div>
        </div>
      </Section>

      <Section className="home-v1hub-works" title="How V1hub works">
        <div className="container">
          <div className="row row-gap-2">
            <div className="col-md-12 col-lg-4">
              <CardImage
                src="https://v1hub.com/assets/images/home/upLoad.png"
                title="Upload your parts online"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis et, netus molestie metus, enim."
              />
            </div>
            <div className="col-md-12 col-lg-4">
              <CardImage
                src="https://v1hub.com/assets/images/home/ras.png"
                title="We source your parts immediately"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis et, netus molestie metus, enim."
              />
            </div>
            <div className="col-md-12 col-lg-4">
              <CardImage
                src="https://v1hub.com/assets/images/home/car.png"
                title="Your parts are delivered straight to you"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis et, netus molestie metus, enim."
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="home-v1hub-works"
        title="Our experience in numbers"
        style={{ background: '#F5F5F5' }}
      >
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-md-6 col-lg-4">
              <CardStatistic
                src="https://v1hub.com/assets/images/home/world.png"
                title="145,000"
                description="engineers served"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardStatistic
                src="https://v1hub.com/assets/images/home/house.png"
                title="35,000"
                description="businesses"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardStatistic
                src="https://v1hub.com/assets/images/home/handShake.png"
                title="240"
                description="manufacturing partners"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardStatistic
                src="https://v1hub.com/assets/images/home/monitor.png"
                title="6M+"
                description="parts & prototypes produced"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardStatistic
                src="https://v1hub.com/assets/images/home/process.png"
                title="27%"
                description="of Fortune 500 companies"
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <CardStatistic
                src="https://v1hub.com/assets/images/home/machine.png"
                title="4,200+"
                description="machines"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="High quality parts every time" style={{ background: '#EBEBEB' }}>
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-md-12 col-lg-4">
              <CardImage
                src="https://v1hub.com/assets/images/home/asurrance.png"
                title="Quality assurance"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis et, netus molestie metus, enim."
                shape="circle"
                action={
                  <>
                    <div className="text-center mt-1">
                      <Button color="white"> Learn more </Button>
                    </div>
                  </>
                }
              />
            </div>
            <div className="col-md-12 col-lg-4">
              <CardImage
                src="https://v1hub.com/assets/images/home/protection.png"
                title="IP protection"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis et, netus molestie metus, enim."
                shape="circle"
                action={
                  <>
                    <div className="text-center mt-1">
                      <Button color="white"> Learn more </Button>
                    </div>
                  </>
                }
              />
            </div>
            <div className="col-md-12 col-lg-4">
              <CardImage
                src="https://v1hub.com/assets/images/home/Certifications.png"
                title="Certifications"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis et, netus molestie metus, enim."
                shape="circle"
                action={
                  <>
                    <div className="text-center mt-1">
                      <Button color="white"> Learn more </Button>
                    </div>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Powerful automation that makes sourcing easy"
        style={{ background: '#222222', color: '#fff' }}
      >
        <div className="container">
          <div className="row row-gap-2">
            <div className="col-md-12 col-lg-6">
              <img alt="img" src="https://v1hub.com/assets/images/home/video.png" />
            </div>
            <div className="col-md-12 col-lg-6">
              <List>
                <List.ListDescription
                  title="Instant quoting"
                  active
                  information="Upload your CAD file online to receive a guaranteed quote in seconds and save your quote to lock in the price."
                />
                <List.ListDescription
                  title="Automated DfM feedback"
                  information="You can get automatic manufacturability feedback  on your parts within the interface, making it quicker and easier to iterate on your design."
                />
                <List.ListDescription
                  title="Online order management"
                  information="Easily manage orders online, track deliveries and share important details with others on your team."
                />
              </List>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Join 35,000 businesses" style={{ background: '#F5F5F5' }}>
        <SliderSimple>
          <div>
            <CardImage
              src="https://v1hub.com/assets/images/home/donald.png"
              title="Christopher Donald"
              description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis est netus turpis ultrices commodo ac.”"
              shape="circle"
              size="sm"
              extra="Company"
            />
          </div>
          <div>
            <CardImage
              src="https://v1hub.com/assets/images/home/lily.png"
              title="Lily Aldrin"
              description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis est netus turpis ultrices commodo ac.”"
              shape="circle"
              size="sm"
              extra="Company"
            />
          </div>
          <div>
            <CardImage
              src="https://v1hub.com/assets/images/home/steven.png"
              title="Steven Tyler"
              description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis gravida proin ultrices quis sem turpis eget faucibus mattis. Diam, quis vitae sed feugiat et quis adipiscing nascetur.”"
              shape="circle"
              size="sm"
              extra="Company"
            />
          </div>
        </SliderSimple>
      </Section>

      <Section title="Manufactured through V1hub">
        <div className="container">
          <div className="row row-gap-2">
            <div className="col-md-12 col-lg-8">
              <CardNews
                src="https://v1hubstorage.blob.core.windows.net/manufactored/image%2021.png"
                title="Learn how Kepler rapidly went from a sketch on a napkin to a satellite in space with Hubs CNC machining"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur diam pharetra enim elementum nibh id eros, euismod. Morbi eget diam amet dignissim nec aliquet sed. Proin volutpat volutpat...."
              />
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="row row-gap-1">
                <div className="col-sm-12 col-md-6 col-lg-12">
                  <CardNews
                    src="https://v1hubstorage.blob.core.windows.net/manufactored/image%2018.png"
                    title="Crafting top-notch prosthetics with composites"
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-12">
                  <CardNews
                    src="https://v1hubstorage.blob.core.windows.net/manufactored/image%2020.png"
                    title="Crafting top-notch prosthetics with composites"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="members"
        title="Your dedicated team"
        extra="Get in touch with our team. Call us directly on +44 20 3966 9208. Or email us at saleseu@hubs.com."
      >
        <div className="container">
          <div className="row row-gap-2 justify-content-center">
            <div className="col-sm-4 col-md-3 col-lg-2">
              <CardMember
                src="https://v1hub.com/assets/images/home/bussinessman.png"
                name="Bram de Zwart"
                position="Innovation"
              />
            </div>
            <div className="col-sm-4 col-md-3 col-lg-2">
              <CardMember
                src="https://v1hub.com/assets/images/home/bussinessman.png"
                name="Bram de Zwart"
                position="Innovation"
              />
            </div>
            <div className="col-sm-4 col-md-3 col-lg-2">
              <CardMember
                src="https://v1hub.com/assets/images/home/bussinessman.png"
                name="Bram de Zwart"
                position="Innovation"
              />
            </div>
            <div className="col-sm-4 col-md-3 col-lg-2">
              <CardMember
                src="https://v1hub.com/assets/images/home/bussinessman.png"
                name="Bram de Zwart"
                position="Innovation"
              />
            </div>
            <div className="col-sm-4 col-md-3 col-lg-2">
              <CardMember
                src="https://v1hub.com/assets/images/home/bussinessman.png"
                name="Bram de Zwart"
                position="Innovation"
              />
            </div>
          </div>
          <div className="mt-2 text-center">
            <Button color="grey">Contact us</Button>
          </div>
        </div>
      </Section>

      <Section title="Why choose V1hub">
        <div className="container">
          <div className="row row-gap-2">
            <div className="col-sm-6 col-md-4">
              <CardIcon src="https://v1hub.com/assets/images/home/check.png">
                <CardIcon.StrongTitle> Instant </CardIcon.StrongTitle> Quotes
              </CardIcon>
            </div>
            <div className="col-sm-6 col-md-4">
              <CardIcon src="https://v1hub.com/assets/images/home/check.png">
                Automated <CardIcon.StrongTitle> DfM feedback </CardIcon.StrongTitle>
              </CardIcon>
            </div>
            <div className="col-sm-6 col-md-4">
              <CardIcon src="https://v1hub.com/assets/images/home/check.png">
                Always-available <CardIcon.StrongTitle> production capacity</CardIcon.StrongTitle>
              </CardIcon>
            </div>
            <div className="col-sm-6 col-md-4">
              <CardIcon src="https://v1hub.com/assets/images/home/check.png">
                <CardIcon.StrongTitle> Easy order </CardIcon.StrongTitle> management
              </CardIcon>
            </div>
            <div className="col-sm-6 col-md-4">
              <CardIcon src="https://v1hub.com/assets/images/home/check.png">
                Dedicated <CardIcon.StrongTitle> team of specialists </CardIcon.StrongTitle>
              </CardIcon>
            </div>
            <div className="col-sm-6 col-md-4">
              <CardIcon src="https://v1hub.com/assets/images/home/check.png">
                <CardIcon.StrongTitle> Most competitive prices</CardIcon.StrongTitle> in the market
              </CardIcon>
            </div>
            <div className="col-sm-6 col-md-4">
              <CardIcon src="https://v1hub.com/assets/images/home/check.png">
                <CardIcon.StrongTitle> Comprehensive </CardIcon.StrongTitle> capabilities
              </CardIcon>
            </div>
            <div className="col-sm-6 col-md-4">
              <CardIcon src="https://v1hub.com/assets/images/home/check.png">
                <CardIcon.StrongTitle> Risk-free access </CardIcon.StrongTitle> to manufacturing
                services in China, India, the EU and the US
              </CardIcon>
            </div>
          </div>
        </div>
      </Section>

      <Section className="companies">
        <div className="container">
          <div className="text-center">
            <h3 className="text-grey" style={{ lineHeight: '30px' }}>
              Trusted by over 145,000 engineers worldwide
            </h3>
          </div>
          <div className="row row-gap-2 mt-5">
            <div className="col-sm-6 col-md-4 col-lg-2">
              <CardCompany />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <CardCompany />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <CardCompany />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <CardCompany />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <CardCompany />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <CardCompany />
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Get your parts into production today"
        style={{ background: '#312F30', color: '#fff' }}
      >
        <div className="container text-center">
          <Button color="primary" size="lg">
            Get an instant quote
          </Button>
        </div>
      </Section>
    </>
  );
};

export default React.memo(HomePage);
