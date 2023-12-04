import { useState } from "react";
import useSWR  from "swr";
export default function RemoteHostsList() {
  const [isDisplayMacAddress, setDisplay] = useState(false);
  const sampleMacAddress = "AA:BB:CC:DD:EE:FF";
  //データベースからサーバーのデータを取得し、状態と合わせて返却するAPIへのアクセス
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>名称</th>
            <th>状態</th>
            <th>IPアドレス</th>
            <th>MACアドレス</th>
            <th>OS</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-bold">Main A</div>
                  <span className="badge badge-ghost badge-sm">
                    DESKTOP-FG7F9S
                  </span>
                </div>
              </div>
            </td>
            <td>
              遠隔操作対象リストに存在しないホストです
              <br />
              操作対象リストに追加するには、<a href="#">こちら</a>
              をクリックしてください
            </td>
            <td>192.168.0.1</td>
            <td><div className={!isDisplayMacAddress ? "blur-sm" : ""} onClick={() => {setDisplay(!isDisplayMacAddress)}}>{sampleMacAddress}</div></td>
            <td>Windows 10 Pro</td>
            <th>
              {/* <button className="btn btn-xs btn-disabled text-white">起動</button> */}
              <span className="loading loading-spinner loading-md"></span>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
