import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
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

  const handleCheckActiveName = async (
    { activeName }: ActiveNameFormInputs,
    { setSubmitting }: FormikHelpers<ActiveNameFormInputs>
  ) => {
    console.log("activeName", activeName);

    setSubmitting(false);
  };

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

  const formik = useFormik({
    initialValues: { activeName: "" },
    validationSchema: yup.object().shape({
      activeName: yup.string().required("Please enter active name."),
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
          Enter active name and check availability.
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
                placeholder="bpActive"
                _placeholder={{ color: "gray.500" }}
                name="activeName"
                type="text"
                value={formik.values.activeName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.errors.activeName && formik.touched.activeName && (
                <FormErrorMessage fontSize="xs">
                  {formik.errors.activeName}
                </FormErrorMessage>
              )}
            </FormControl>
            <Stack spacing={6}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                loadingText="Checking..."
                type="submit"
              >
                Check
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}
