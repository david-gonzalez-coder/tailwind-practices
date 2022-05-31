const Typography = () => {
  return (
    <div className="grid max-h-screen w-screen xs:grid-cols-2 items-start gap-8 overflow-hidden p-8">
      <h2 className="col-span-full mx-auto bg-gradient-to-r from-pink-400 to-violet-700 bg-clip-text font-mono text-5xl font-bold capitalize leading-normal text-transparent ">
        typography
      </h2>

      <p className="max-w-prose text-justify indent-8">
        This just a preactice with the properties of font. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Tenetur aperiam nisi pariatur,
        esse vero dolores alias doloremque reiciendis quos, distinctio et itaque
        a dolore, architecto rerum animi voluptatibus quo quia.
      </p>
      <div className="flex gap-2  p-4">
        <ul className="list-inside list-disc">
          <li className="decoration-slate-300 decoration-wavy underline-offset-8 hover:underline">
            lorem
          </li>
          <li className="decoration-slate-300 decoration-wavy underline-offset-8 hover:underline">
            ipsum
          </li>
          <li className="decoration-slate-300 decoration-wavy underline-offset-8 hover:underline">
            item
          </li>
        </ul>

        <ol className="list-inside list-decimal">
          <li className="decoration-dashed active:overline">lorem</li>
          <li className="decoration-dashed active:overline">ipsum</li>
          <li className="decoration-dashed active:overline">item</li>
        </ol>

        <ul className="list-none">
          <li className="line-through decoration-double">lorem</li>
          <li className="line-through decoration-double">ipsum</li>
          <li className="line-through decoration-double">item</li>
        </ul>
      </div>

      <div className="h-32 rounded-md p-4 shadow-md ">
        <p className="">
          Lorem ipsum <span className="uppercase text-red-500">dolor sit amet</span>  consectetur adipisicing elit. Id, in.
          Laudantium quae <span className="font-bold italic">deserunt qui expedita!</span> saepe, nesciunt facilis dolore eius sequi delectus
          earum vel, dignissimos quas deserunt qui expedita! Soluta veritatis
          voluptatibus dolore!
        </p>
      </div>
    </div>
  );
};
export default Typography;
