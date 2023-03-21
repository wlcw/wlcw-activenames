import { hideEmail } from "@/utils/common";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { formatDistance } from "date-fns";
import { FormikHelpers, useFormik } from "formik";
import Image from "next/image";
import { ReactNode, useState } from "react";
import * as yup from "yup";

type ActiveNameFormInputs = {
  activeName: string;
};

type CheckActiveNamesProps = {
  children?: ReactNode;
};

function CheckActiveNames(props: CheckActiveNamesProps) {
  const { children } = props;
  const [coach, setCoach] = useState<Coach>();

  const toast = useToast();

  const handleCheckActiveName = async (
    { activeName }: ActiveNameFormInputs,
    { setSubmitting }: FormikHelpers<ActiveNameFormInputs>
  ) => {
    setCoach(undefined);
    try {
      const { data } = await axios.get(
        `/api/v1/coaches?activeName=${activeName}Active`
      );

      console.log("data", data);

      toast({
        title: "Taken",
        description: data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      setCoach(data.coach);
    } catch (error) {
      console.error(error);

      if (error.name === "AxiosError") {
        toast({
          title: "Success",
          description: error.response.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      } else
        toast({
          title: "Failed",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
    }

    setSubmitting(false);
  };

  console.log("coach", coach);

  return (
    <>
      <CheckActiveNameForm
        coach={coach}
        onCheckActiveName={handleCheckActiveName}
      />
      <div>{children}</div>
    </>
  );
}

export default CheckActiveNames;

export type Coach = {
  name: string;
  activeName: string;
  email: string;
  joinDate: Date;
  rank: string;
};
type CheckActiveNameFormProps = {
  coach: Coach | null | undefined;
  onCheckActiveName: (
    { activeName }: ActiveNameFormInputs,
    { setSubmitting }: FormikHelpers<ActiveNameFormInputs>
  ) => void;
};

export function CheckActiveNameForm(
  props: CheckActiveNameFormProps
): JSX.Element {
  const { coach, onCheckActiveName } = props;
  console.log("🚀 ~ file: CheckActiveNames.tsx:112 ~ coach:", coach);

  const formik = useFormik({
    initialValues: { activeName: "" },
    validationSchema: yup.object().shape({
      activeName: yup
        .string()
        .required("Please enter active name.")
        .min(2, "Minimum of 2 characters")
        .max(4, "Maximum of 4 characters"),
    }),
    onSubmit: onCheckActiveName,
  });

  return (
    <Flex
      minH={"90vh"}
      align={"center"}
      justify={"center"}
      direction="column"
      gap={10}
      m={4}
      // backgroundImage="https://www.wlcw.com.au/wp-content/uploads/2022/09/22OCT-BELLA-VISTA-2-webp.webp"
    >
      <Image
        src="/assets/form-logo.png"
        alt="wlcw logo"
        width={100}
        height={100}
      />
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        // mb={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          WLCW Active Names
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          Enter active name prefix and check availability.
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={6}>
            <FormControl
              isRequired
              isInvalid={
                !!(formik.errors.activeName && formik.touched.activeName)
              }
              isDisabled={formik?.isSubmitting}
              aria-label="Username"
              id="activeName"
            >
              <Input
                placeholder="bp"
                _placeholder={{ color: "gray.500" }}
                name="activeName"
                type="text"
                value={formik.values.activeName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.errors.activeName && formik.touched.activeName ? (
                <FormErrorMessage fontSize="xs">
                  {formik.errors.activeName}
                </FormErrorMessage>
              ) : (
                <FormHelperText>
                  {`Only enter active name prefix, no need to add "Active"`};{" "}
                </FormHelperText>
              )}
            </FormControl>
            {coach ? (
              <CoachDetail
                activeName={coach.activeName}
                name={coach.name}
                email={coach.email}
                joinDate={coach.joinDate}
                rank={coach.rank}
              />
            ) : null}
            <Stack spacing={6}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                loadingText="Checking..."
                type="submit"
                isLoading={formik.isSubmitting}
              >
                {formik.values.activeName
                  ? `Check ${formik.values.activeName}Active`
                  : "Check"}
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}

export function CoachDetail({
  activeName,
  email,
  joinDate,
  name,
  rank,
}: Coach) {
  return (
    <Stack
      spacing={3}
      border="1px solid"
      borderColor="#9f9f9f"
      p={4}
      rounded="md"
      bgGradient="linear(to-r, blue.100, teal.200)"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold">Name: </Text>
        <Text fontWeight="bold">{name}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold">Active Name: </Text>
        <Text fontWeight="bold">{activeName}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold">Rank: </Text>
        <Text fontWeight="bold">{rank}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold">Email: </Text>
        <Text fontWeight="bold">{hideEmail(email)}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold">Join Date: </Text>
        <Text fontWeight="bold">
          {formatDistance(new Date(joinDate), new Date(), {
            addSuffix: true,
          })}
        </Text>
      </Flex>
    </Stack>
  );
}
