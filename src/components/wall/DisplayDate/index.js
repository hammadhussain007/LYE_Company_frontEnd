import React from "react";
import moment from "moment";

const DisplayDate = ({ date }) => {
  const postDate = moment(date);
  const currentDate = moment(new Date());
  const duration = moment.duration(currentDate.diff(postDate));
  const minutes = (duration.asMinutes() | 0);
  const hours = (duration.asHours() | 0);

  switch (true) {
    case minutes === 0:
      return <p className="  gx-mb-3">Just now</p>;
    case minutes < 60:
      return <p className="  gx-mb-3">{minutes} min ago</p>;
    case hours < 24:
      return <p className="  gx-mb-3">{hours} hours ago</p>;
    default:
      return <p className="  gx-mb-3">{postDate.format("DD MMM, YYYY")}</p>
  }
};

export default DisplayDate;
