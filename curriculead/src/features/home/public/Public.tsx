import React, { useEffect, useState } from "react";
import { useAppSelector } from "../hooks"; // Certifique-se de que seu hook está configurado corretamente
import { CurriculumStyleEnum } from "../enumerators/curriculumType.enum";
import CurriculumDefault from "./CurriculumDefault";
import LoadingPage from "./LoadingPage";
import html2pdf from "html2pdf.js"; // Certifique-se de que html2pdf.js está instalado
import CurriculumRedDefault from "src/components/Curriculums/CurriculumRedDefault";
import { useAppDispatch } from "src/app/hooks";
import { getCurriculumUrl } from "../curriculum/curriculumSlice";

const Public: React.FC = () => {
  const { curriculumData, user, loading } = useAppSelector((state) => ({
    curriculumData: state.curriculum,
    user: state.user,
    loading: state.loading,
  }));
  const dispatch = useAppDispatch();
  const [loadingPdf, setLoadingPdf] = useState(false);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search).get('url');
    if (urlParam) {
      dispatch(getCurriculumUrl(urlParam));
    }
  }, [dispatch]);

  const htmlToPdf = () => {
    setLoadingPdf(true);
    const element = document.getElementById("curriculum");
    const opt = {
      margin: 0.5,
      filename: `${user.name}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, width: 900 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .from(element).set(opt).save()
      .then(() => setLoadingPdf(false));
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="flex align-items-center justify-content-evenly pb-5" id="curriculum">
      <div>
        {curriculumData.styleCurriculum.color === CurriculumStyleEnum.Default && <CurriculumDefault />}
        {curriculumData.styleCurriculum.color === CurriculumStyleEnum.RedDefault && (
          <div> <CurriculumRedDefault /> </div>
        )}
      </div>
      <button onClick={htmlToPdf} disabled={loadingPdf}>
        {loadingPdf ? "Loading..." : "Download PDF"}
      </button>
      <div className="flex flex-column gap-3">
        {Object.values(CurriculumStyleEnum).map((style: any) => (
          <div className="flex align-items-center" key={style}>
            <input
              type="radio" id={style}
              name="curriculumStyle" value={style}
              checked={curriculumData.styleCurriculum.color === style}
              onChange={() => {curriculumData.styleCurriculum.color = style; }}
            />
            <label htmlFor={style} className="ml-2">
              {style}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Public;
