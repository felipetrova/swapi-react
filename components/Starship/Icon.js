function Icon(props) {
  return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={props.viewBox}
    >
      <path
        fill={props.fill}
        d={props.content}
      />
    </svg>
  );
}

export default Icon;
