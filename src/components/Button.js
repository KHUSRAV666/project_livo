export default function Button(props) {
    const { text } = props;

  return (
    <a
        href=""
        className="block px-11 py-3 font-bold w-[250px] h-[60px] leading-[35px] text-center rounded-[10px] text-[#fff] bg-[#f53838] hover:shadow-2xl hover:shadow-[#fbafaf] shadow:blur-[27px]">
        {text}
    </a>
  )
}
