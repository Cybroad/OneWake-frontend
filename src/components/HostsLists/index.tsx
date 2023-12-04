import useSWR from "swr";

type hostList = {
  hostName: string;
  ipAddress: string;
  macAddress: string;
  osName: string;
};

export default function HostsList() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/api/v1/hosts",
    fetcher
  );
  if (error) return "Error";
  if (isLoading) return "Loading...";

  const hostListData: hostList[] = data;
  return (
    <div className="overflow-x-auto">
      <div className="pb-2">
        <span className="badge badge-outline">
          {hostListData.length}台検出しました
        </span>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ホスト名</th>
            <th>IPアドレス</th>
            <th>MACアドレス</th>
            <th>OS</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {hostListData.map((item: hostList, index: number) => (
            <tr key={index}>
              <td>
                <div className="flex items-center gap-3">
                  <div>{item["hostName"]}</div>
                </div>
              </td>
              <td>{item["ipAddress"]}</td>
              <td>{item["macAddress"]}</td>
              <td>{item["osName"]}</td>
              <th>
                <button
                  type="button"
                  className="btn btn-xs btn-accent text-white"
                  id={index.toString()}
                >
                  追加
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
