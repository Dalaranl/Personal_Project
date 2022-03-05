import { useContext, useEffect, useState } from "react";
import { CreateProductContext } from "../../../../../../../pages/used/new";
import * as S from "../Pages.emotions";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap() {
  const { address, isSearch, setIsSearch, setAddress } =
    useContext(CreateProductContext);

  const [count, setCount] = useState(0);
  useEffect(() => {
    // 여기서 직접 다운 받고, 다 받을 때 까지 기다려주기

    const script = document.createElement("script"); // <script></script>

    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=b90b9fb3b3ec8e228c00704ef5a68e06&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(address?.lat, address?.lng), // 지도의 중심좌표
          level: 1, // 지도의 확대 레벨
        };

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        const imageSrc = "/img/marker.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        let marker = new window.kakao.maps.Marker({
          image: markerImage,
        }); // 클릭한 위치를 표시할 마커입니다

        if (count === 0) {
          // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
          if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function (position) {
              const lat = position.coords.latitude; // 위도
              const lng = position.coords.longitude; // 경도

              if (address && setAddress)
                setAddress({
                  ...address,
                  lat,
                  lng,
                });
            });
            setCount((prev) => prev + 1);
          } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

            if (address && setAddress)
              setAddress({
                ...address,
                lat: 33.450701,
                lng: 126.570667,
              });
            setCount((prev) => prev + 1);
          }
        }

        if (address?.lat && address.lng) {
          const coords = new window.kakao.maps.LatLng(address.lat, address.lng);
          marker = new window.kakao.maps.Marker({
            map: map,
            position: coords,
            image: markerImage,
          });
        }

        // 주소로 좌표를 검색합니다
        if (isSearch) {
          geocoder.addressSearch(
            address?.address,
            function (result: any, status: any) {
              // 정상적으로 검색이 완료됐으면
              if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(
                  result[0].y,
                  result[0].x
                );

                // 결과값으로 받은 위치를 마커로 표시합니다
                marker = new window.kakao.maps.Marker({
                  map: map,
                  position: coords,
                  image: markerImage,
                });
                if (address && setAddress)
                  setAddress({
                    ...address,
                    lat: result[0].y,
                    lng: result[0].x,
                  });

                setIsSearch && setIsSearch(false);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.panTo(coords);
              }
            }
          );
        }

        const infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

        // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);

        // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            searchDetailAddrFromCoords(
              mouseEvent.latLng,
              function (result: any, status: any) {
                if (status === window.kakao.maps.services.Status.OK) {
                  let detailAddr = result[0].road_address
                    ? "<div>도로명주소 : " +
                      result[0].road_address.address_name +
                      "</div>"
                    : "";
                  detailAddr +=
                    "<div>지번 주소 : " +
                    result[0].address.address_name +
                    "</div>";

                  const content =
                    '<div class="bAddr">' +
                    '<span class="title">법정동 주소정보</span>' +
                    detailAddr +
                    "</div>";

                  // 마커를 클릭한 위치에 표시합니다
                  marker.setPosition(mouseEvent.latLng);
                  marker.setMap(map);

                  // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                  infowindow.setContent(content);
                  infowindow.open(map, marker);

                  // setMarkerAddress({
                  //   ...markerAddress,
                  //   zipcode:
                  // });
                }
              }
            );
          }
        );

        // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
        window.kakao.maps.event.addListener(map, "idle", function () {
          searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        });

        function searchAddrFromCoords(coords: any, callback: any) {
          // 좌표로 행정동 주소 정보를 요청합니다
          geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
        }

        function searchDetailAddrFromCoords(coords: any, callback: any) {
          // 좌표로 법정동 상세 주소 정보를 요청합니다
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
        function displayCenterInfo(result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            const infoDiv = document.getElementById("centerAddr");

            for (let i = 0; i < result.length; i++) {
              // 행정동의 region_type 값은 'H' 이므로
              if (result[i].region_type === "H") {
                if (infoDiv) infoDiv.innerHTML = result[i].address_name;
                break;
              }
            }
          }
        }
      });
    };
  }, [address]);

  return (
    <S.KakaoWraper>
      <S.Map id="map"></S.Map>
      <span>지도를 클릭하면 위치 수정이 가능합니다.</span>
    </S.KakaoWraper>
  );
}
