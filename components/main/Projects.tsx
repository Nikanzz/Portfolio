import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-15'>
        <h1 className='text-[40px] font-bold text-white mb-5'>My Projects</h1>
        <div 
        className='h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-15'>
            <ProjectCard
              src="/MachineLearningProject.png"
              title="Prediksi Harga Pangan Jayapura Menggunakan ELM, LSTM, LIGHTGBM, DAN GB"
              description="A predictive modeling project comparing ELM, LSTM, LightGBM, and Gradient Boosting to forecast daily food price volatility in Jayapura.
              The study highlights ELM as the most efficient and accurate model, achieving strong performance across multiple evaluation metrics.">
                
            </ProjectCard>

            <ProjectCard
              src="/DistributedSystemProject.png"
              title="QuizNet (Distributed Quiz System Simulation)"
              description="A real-time distributed quiz system built using Python and GNS3, designed to simulate multi-client interactions within a networked environment.
              It demonstrates concepts of concurrency, socket programming, and network communication through asynchronous server–client architecture.">
                
            </ProjectCard>

            <ProjectCard
              src="/DataMiningProject.png"
              title="Deteksi Kelelahan Mata Berdasarkan Citra Wajah MRL Eye Dataset dengan Menggunakan GLCM, PCA, dan SVM"
              description="An image-based fatigue detection system utilizing GLCM for texture extraction, PCA for feature reduction, and SVM for classification.
              Achieved 92.38% accuracy in detecting eye fatigue states, demonstrating potential for lightweight real-time applications.">
                
            </ProjectCard>
        </div>
    </div>
  )
}

export default Projects
