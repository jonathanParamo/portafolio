const TechnologyCard = ({ name, icon }) => {
  return (
    <div className="p-2 w-24 h-24 md:w-32 md:h-32 ">
      <div className="relative bg-white dark:bg-darkPrimary rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 md:p-4 flex flex-col items-center">
          <div className="relative w-14 h-14 mb-3">
            <img
              src={icon}
              alt={name}
              className="w-full h-full object-cover rounded-[20%] border-2 border-purple-500 dark:border-cyan-500
                transition-transform transform hover:scale-110 hover:shadow-[0_0_5px_5px_rgb(196,181,253)]
                md:hover:shadow-[0_0_7px_5px_rgb(196,181,253)] md:hover:dark:shadow-[0_0_5px_7px_rgb(22,78,99)]
                hover:dark:shadow-[0_0_5px_5px_rgb(22,78,99)]"
            />
          </div>
          <h3 className="text-[18px] font-bold text-gray-900 dark:text-white hidden md:block">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;