import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../components/PageTitle";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { Calender, JournalContainer } from "../../containers";
import { allJournals } from "../../api";

export default function Journal() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["journals"],
    queryFn: allJournals,
  });

  return (
    <>
      <PageTitle
        title="My Journals"
        buttonTitle="New Journal"
        hrefValue="create"
      />
      <div className="mt-6 flex sm:flex-col gap-6">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error error={error} />
        ) : (
          <>
            <JournalContainer journals={data?.data?.journals} />
            <Calender />
          </>
        )}
      </div>
    </>
  );
}