import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-green-500'>
      <Text>Onboarding</Text>
    </SafeAreaView>
  );
};

export default Welcome;
