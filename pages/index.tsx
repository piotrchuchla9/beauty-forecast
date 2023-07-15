import { QueryClient, QueryClientProvider } from "react-query";
import Welcome from "@/components/welcome";
import MyLocationWeather from "@/components/my-location";

export default function Index() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex justify-center h-[100vh]">
        <div className="w-4/5 sm:w-3/4 h-4/5 bg-blue-200 bg-opacity-50 rounded mt-20 p-5 sm:p-10 xl:p-20 overflow-y-auto">
          <Welcome />
          <MyLocationWeather />
        </div>
      </div>
    </QueryClientProvider>
  );
}
