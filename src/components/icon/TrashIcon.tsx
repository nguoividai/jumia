import React from 'react';

type TrashIconProps = {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
};

const TrashIcon: React.FC<TrashIconProps> = ({ width, height, style }) => {
  return (
    <svg
      style={style}
      width={width || 16}
      height={height}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0331 6.52882C11.049 6.11492 10.7264 5.76647 10.3125 5.75055C9.89857 5.73463 9.55013 6.05727 9.53421 6.47118L11.0331 6.52882ZM9.24575 13.9712C9.22983 14.3851 9.55246 14.7335 9.96637 14.7494C10.3803 14.7654 10.7287 14.4427 10.7446 14.0288L9.24575 13.9712ZM5.25536 14.0288C5.27128 14.4427 5.61973 14.7654 6.03363 14.7494C6.44754 14.7335 6.77017 14.3851 6.75425 13.9712L5.25536 14.0288ZM6.46579 6.47118C6.44987 6.05727 6.10143 5.73463 5.68752 5.75055C5.27361 5.76647 4.95098 6.11492 4.9669 6.52882L6.46579 6.47118ZM14.023 3.82547L14.135 3.08388L14.135 3.08388L14.023 3.82547ZM14.747 4.70257C15.1551 4.77327 15.5433 4.49972 15.614 4.09159C15.6847 3.68345 15.4111 3.29528 15.003 3.22458L14.747 4.70257ZM13.1332 15.3938L12.3854 15.3363L13.1332 15.3938ZM0.996989 3.22458C0.588853 3.29528 0.315307 3.68345 0.386005 4.09159C0.456704 4.49972 0.844875 4.77327 1.25301 4.70257L0.996989 3.22458ZM2.86683 15.3938L2.11904 15.4513L2.86683 15.3938ZM9.38382 0.897103L9.4078 0.147486L9.38382 0.897103ZM6.61618 0.897103L6.64016 1.64672L6.61618 0.897103ZM11.125 3.49527L11.0672 4.24304L11.125 3.49527ZM4.875 3.49527L4.93278 4.24304L4.875 3.49527ZM9.53421 6.47118L9.24575 13.9712L10.7446 14.0288L11.0331 6.52882L9.53421 6.47118ZM6.75425 13.9712L6.46579 6.47118L4.9669 6.52882L5.25536 14.0288L6.75425 13.9712ZM11.2637 16.375H4.73631V17.875H11.2637V16.375ZM13.911 4.56707C14.1907 4.6093 14.4693 4.65447 14.747 4.70257L15.003 3.22458C14.7147 3.17464 14.4254 3.12773 14.135 3.08388L13.911 4.56707ZM13.2753 3.76795L12.3854 15.3363L13.881 15.4513L14.7708 3.883L13.2753 3.76795ZM1.25301 4.70257C1.53067 4.65447 1.80932 4.6093 2.08895 4.56707L1.86496 3.08388C1.57463 3.12773 1.28529 3.17464 0.996989 3.22458L1.25301 4.70257ZM3.61462 15.3363L2.72475 3.76795L1.22917 3.883L2.11904 15.4513L3.61462 15.3363ZM4.73631 16.375C4.14846 16.375 3.65971 15.9224 3.61462 15.3363L2.11904 15.4513C2.22424 16.8189 3.36465 17.875 4.73631 17.875V16.375ZM11.2637 17.875C12.6354 17.875 13.7758 16.8189 13.881 15.4513L12.3854 15.3363C12.3403 15.9224 11.8515 16.375 11.2637 16.375V17.875ZM8 1.625C8.45504 1.625 8.90836 1.63228 9.35984 1.64672L9.4078 0.147486C8.94034 0.132533 8.47104 0.125 8 0.125V1.625ZM6.64016 1.64672C7.09164 1.63228 7.54496 1.625 8 1.625V0.125C7.52896 0.125 7.05966 0.132533 6.5922 0.147486L6.64016 1.64672ZM6.5922 0.147486C5.18576 0.192477 4.125 1.36391 4.125 2.73182H5.625C5.625 2.13413 6.082 1.66457 6.64016 1.64672L6.5922 0.147486ZM9.35984 1.64672C9.918 1.66457 10.375 2.13413 10.375 2.73182H11.875C11.875 1.36391 10.8142 0.192477 9.4078 0.147486L9.35984 1.64672ZM10.375 2.73182V3.49527H11.875V2.73182H10.375ZM8 4.125C9.03234 4.125 10.0552 4.16484 11.0672 4.24304L11.1828 2.7475C10.1324 2.66633 9.07094 2.625 8 2.625V4.125ZM11.0672 4.24304C12.0253 4.31708 12.9736 4.4255 13.911 4.56707L14.135 3.08388C13.1617 2.9369 12.1772 2.82434 11.1828 2.7475L11.0672 4.24304ZM4.125 2.73182V3.49527H5.625V2.73182H4.125ZM2.08895 4.56707C3.02636 4.4255 3.97471 4.31708 4.93278 4.24304L4.81722 2.7475C3.82278 2.82434 2.83827 2.9369 1.86496 3.08388L2.08895 4.56707ZM4.93278 4.24304C5.94478 4.16484 6.96766 4.125 8 4.125V2.625C6.92906 2.625 5.86762 2.66633 4.81722 2.7475L4.93278 4.24304Z"
        fill="#4B5563"
      />
    </svg>
  );
};

export default React.memo(TrashIcon);
