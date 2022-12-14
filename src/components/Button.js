export default function Button(props) {
    const { text } = props;

  return (
    <a
        href=""
        className="block lg0:px-11 md:px-7 sm:px-4 lg0:py-3 lg0:py-2 font-bold lg0:w-[250px] md:w-[200px] sm:w-[150px] md:h-[45px] sm:h-[40px] max-sm:h-[40px] lg0:leading-[25px] sm:leading-[40px] max-sm:leading-[40px] text-center rounded-[10px] text-[#fff] bg-[#f53838] md:hover:shadow-2xl md:hover:shadow-[#fbafaf] shadow:blur-[27px]">
        {text}
    </a>
  )
}
