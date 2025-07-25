import { useTranslation } from "react-i18next";
import { HiMiniCheckBadge } from "react-icons/hi2";

const SuccessMessage = () => {
  const { t } = useTranslation('common');
   return (
  <div className="flex flex-col items-center justify-center min-h-[300px] py-10">
    <div className="mb-6">
        <HiMiniCheckBadge className="size-20 text-[#006fba]" />
    </div>
    <p className="text-gray-700 text-lg mb-2 text-center">
      {t('thank_you_message')}
    </p>
    <h2 className="text-[#006fba] text-2xl font-bold text-center">
      {t('thank_you_contact_message')}
    </h2>
  </div>
)
};

export default SuccessMessage;