import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import Navbar from "../../Components/Navbar/Navbar";
import "./styles.module.css";

const Main = () => {
  const textLines = ["MORE CHEESEE!!", "MORE TOPPINGS!!", "MORE FUNNN!!"];

  const userstate = useSelector((state) => state.setUserData);
  const user = userstate.userData;
  return (
    <>
      <Navbar />
      <Flex direction={["column", "column", "row"]} width="100%">
        <VStack width="100%" align={["center", "center", "flex-start"]}>
          <HStack width="100%" backgroundColor="black">
            <Row
              gutter={[16, 16]}
              style={{ width: "100%", backgroundColor: "black" }}
            >
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <VStack
                  width="100%"
                  justifyContent="center"
                  textAlign={["center", "center", "left"]}
                >
                  <Text
                    paddingBottom="20px"
                    fontSize={["xl", "2xl", "3xl"]}
                    color="white"
                    width="100%"
                  >
                    PIZZA Delivery brings
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize="3xl"
                    color="white"
                    width="100%"
                  >
                    Delicious and Hot Pizzas Just for You.
                  </Text>
                  <div
                    style={{
                      fontSize: "60px",
                      fontFamily: "Roboto Mono",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    <TypeAnimation sequence={textLines} speed={80} loop />
                  </div>

                  <Link to={user && user?.role === "user" ? "/home" : "/login"}>
                    <Button
                      margin={3}
                      backgroundColor="#b33030"
                      color="white"
                      width="300px"
                      _hover={{ bg: "#FF8080" }}
                    >
                      ORDER NOW
                    </Button>
                  </Link>
                </VStack>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Image
                  className="responsive-image"
                  width="100%"
                  height={["auto", "auto", "400px"]}
                  src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg"
                />
              </Col>
            </Row>
          </HStack>
          <HStack
            margin={0}
            width="100%"
            backgroundColor="#dee2e6"
            textAlign="center"
          >
            <Row
              gutter={[16, 16]}
              style={{ backgroundColor: "#dee2e6", textAlign: "center" }}
            >
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Image
                  width="100%"
                  height={["auto", "auto", "400px"]}
                  src="https://images.themodernproper.com/billowy-turkey/production/posts/Thai-Style-Pizza-1.jpg?w=5472&auto=compress%2Cformat&fit=crop&dm=1599766869&s=36d69be04f0d27def532c2c33622c2d8"
                />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Text
                  style={{
					paddingTop:"50px",
                    fontSize: "2em",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  You can also make your own pizza! Tell us what you want and we
                  will make it for you! Your choice of base, toppings, cheese,
                  and much more things.
                </Text>
              </Col>
            </Row>
          </HStack>
          <VStack width="100%" backgroundColor="#b33030" padding="30px">
            <Text fontSize="3xl" fontWeight="bold" color="white" padding="20px">
              OUR TOP PRIORITIES
            </Text>
            <SimpleGrid columns={3} spacing={10}>
              <Box
                bg="white"
                height="80px"
                width="300px"
                padding="13px"
                borderWidth="3px"
                borderColor="black"
                borderRadius="25px"
              >
                <HStack>
                  <Image
                    marginRight="20px"
                    alignItems="flex-end"
                    borderRadius="0px"
                    width="50px"
                    src="https://cdn-icons-png.flaticon.com/512/3035/3035083.png"
                  />
                  <Text textAlign="center" fontWeight="semibold" fontSize="2xl">
                    100% Hygiene
                  </Text>
                </HStack>
              </Box>
              <Box
                bg="white"
                height="80px"
                width="300px"
                padding="13px"
                borderWidth="3px"
                borderColor="black"
                borderRadius="25px"
              >
                <HStack>
                  <Image
                    marginRight="20px"
                    alignItems="flex-end"
                    borderRadius="0px"
                    width="50px"
                    src="https://cdn-icons.flaticon.com/png/128/2153/premium/2153786.png?token=exp=1648453407~hmac=35a2a3ee71a54a962ee78b7b70a87080"
                  />
                  <Text textAlign="center" fontWeight="semibold" fontSize="2xl">
                    Fresh Vegetables
                  </Text>
                </HStack>
              </Box>

              <Box
                bg="white"
                height="80px"
                width="300px"
                padding="13px"
                borderWidth="3px"
                borderColor="black"
                borderRadius="25px"
              >
                <HStack>
                  <Image
                    marginRight="20px"
                    alignItems="flex-end"
                    borderRadius="0px"
                    width="50px"
                    src="https://cdn-icons.flaticon.com/png/128/3514/premium/3514378.png?token=exp=1648453447~hmac=28e97ed843f7e7bcb58b3043eb9b3de3"
                  />
                  <Text textAlign="center" fontWeight="semibold" fontSize="2xl">
                    Fresh meat
                  </Text>
                </HStack>
              </Box>
              <Box
                bg="white"
                height="80px"
                width="300px"
                padding="13px"
                borderWidth="3px"
                borderColor="black"
                borderRadius="25px"
              >
                <HStack>
                  <Image
                    marginRight="20px"
                    alignItems="flex-end"
                    borderRadius="0px"
                    width="50px"
                    src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png"
                  />
                  <Text textAlign="center" fontWeight="semibold" fontSize="2xl">
                    Fast Delivery
                  </Text>
                </HStack>
              </Box>
              <Box
                bg="white"
                height="80px"
                width="300px"
                padding="13px"
                borderWidth="3px"
                borderColor="black"
                borderRadius="25px"
              >
                <HStack>
                  <Image
                    marginRight="20px"
                    alignItems="flex-end"
                    borderRadius="0px"
                    width="50px"
                    src="https://cdn-icons-png.flaticon.com/128/1684/1684426.png"
                  />
                  <Text textAlign="center" fontWeight="semibold" fontSize="2xl">
                    Hot served
                  </Text>
                </HStack>
              </Box>
              <Box
                bg="white"
                height="80px"
                width="300px"
                padding="13px"
                borderWidth="3px"
                borderColor="black"
                borderRadius="25px"
              >
                <HStack>
                  <Image
                    marginRight="20px"
                    alignItems="flex-end"
                    borderRadius="0px"
                    width="50px"
                    src="https://cdn-icons-png.flaticon.com/512/2651/2651001.png"
                  />
                  <Text textAlign="center" fontWeight="semibold" fontSize="2xl">
                    Your Happiness
                  </Text>
                </HStack>
              </Box>
            </SimpleGrid>
          </VStack>
          <VStack backgroundColor="#dee2e6" width="100%">
            <Text>
              {" "}
              &copy; 2023 - {new Date().getFullYear()}. All rights reserved.
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </>

    // <Flex width='100%'>
    // 	<VStack width='100%'>
    // 		<HStack width='100%'>
    // 			<nav className={styles.navbar}>
    // 				<h1 style={{ color: 'black' }}>SAY CHEESE!</h1>
    // 				<div>
    // 					{user ? (
    // 						<button
    // 							className={styles.white_btn}
    // 							onClick={handleLogout}
    // 						>
    // 							Logout
    // 						</button>
    // 					) : (
    // 						<button
    // 							className={styles.white_btn}
    // 							onClick={() => {
    // 								navigate('/login');
    // 							}}
    // 						>
    // 							Login
    // 						</button>
    // 					)}
    // 				</div>
    // 			</nav>
    // 		</HStack>
    // 	</VStack>
    // </Flex>
  );
};

export default Main;
