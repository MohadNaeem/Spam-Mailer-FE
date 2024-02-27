import React from "react";

// Chakra imports
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
// Assets
import banner from "assets/img/nfts/NftBanner1.png";

export default function Banner({
  isDashboardLoading,
  sendMails,
  isSendingLoading,
  refresh,
  spamValue,
}) {
  console.log(spamValue)
  // Chakra Color Mode
  return (
    <Flex
      direction="column"
      bgImage={banner}
      bgSize="cover"
      py={{ base: "30px", md: "56px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius="30px"
    >
      <Text
        fontSize={{ base: "24px", md: "34px" }}
        color="white"
        mb="14px"
        maxW={{
          base: "100%",
          md: "64%",
          lg: "46%",
          xl: "70%",
          "2xl": "50%",
          "3xl": "42%",
        }}
        fontWeight="700"
        lineHeight={{ base: "32px", md: "42px" }}
      >
        "Reply to Un-Attended Spam Emails"
      </Text>
      <Text
        fontSize="md"
        color="#E3DAFF"
        maxW={{
          base: "100%",
          md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight="500"
        mb="40px"
        lineHeight="28px"
      >
        Enter in this creative world. Discover now the latest NFTs or start
        creating your own!
      </Text>
      <Flex align="center">
        <Button
          bg="white"
          color="black"
          _hover={{ bg: "whiteAlpha.900" }}
          _active={{ bg: "white" }}
          _focus={{ bg: "white" }}
          fontWeight="500"
          minW={{
            base: "100px",
          }}
          fontSize="14px"
          py="20px"
          px="27"
          onClick={sendMails}
          disabled={
            spamValue === 0 ||
            spamValue === null ||
            spamValue === undefined ||
            isNaN(spamValue)
          }
          me="18px"
        >
          {isSendingLoading ? (
            <CircularProgress
              size="30px"
              isIndeterminate
              color="#4481EB"
              thickness="12px"
            />
          ) : (
            "Send Replies"
          )}
        </Button>
        <Link>
          <Button
            bg="white"
            color="black"
            _hover={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            minW={{
              base: "100px",
            }}
            fontWeight="500"
            fontSize="14px"
            onClick={refresh}
            py="20px"
            px="27"
            me="38px"
          >
            {isDashboardLoading ? (
              <CircularProgress
                size="30px"
                isIndeterminate
                color="#4481EB"
                thickness="12px"
              />
            ) : (
              "Refresh Data"
            )}
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
