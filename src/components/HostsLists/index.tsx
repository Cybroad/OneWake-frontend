import useSWR from "swr";

type hostList = {
  hostName: string;
  ipAddress: string;
  macAddress: string;
  osName: string;
};

export default function HostsList() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  /*const postData = {
    name: "test",
    ip: "192.168.0.1",
    hostName: "DESKTOP-EXAMPLE",
    macAddress: "00:00:00:00:00:00",
    osName: "Windows 10",
  };*/ //データ例
  function addHost(postData: object) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };
    fetch("https://localhost:8000/api/v1/host/add", options)
      .then((response) => response.json())
      .then((data) => {
        const responseData = data;
        console.log(responseData);
      })
      .catch((error) => console.error("Error:", error));
  }
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/api/v1/remote/status",
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
                  onClick={() =>
                    addHost({
                      name: item["hostName"],
                      ip: item["ipAddress"],
                      hostName: "DESKTOP-"+index.toString(),
                      macAddress: item["macAddress"],
                      osName: item["osName"],
                    })
                  }
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
