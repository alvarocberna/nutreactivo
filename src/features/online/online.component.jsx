'use client'

import { useState } from 'react'
import { PERSONAL_FIELDS, MEDICIONES_FIELDS, BIOIMPEDANCIA_FIELDS, STEPS } from './online.constants'
import { PersonalInfoSection } from './components/personal-info-section'
import { MedicionesSection } from './components/mediciones-section'
import { BioimpedanciaSection } from './components/bioimpedancia-section'
import { InstructionsPanel } from './components/instructions-panel'
import { InstructionsModalMobile } from './components/instructions-modal-mobile'
import './style.css'

const INITIAL_VALUES = {
    ...Object.fromEntries(PERSONAL_FIELDS.map((f) => [f.key, f.defaultValue || ''])),
    ...Object.fromEntries(MEDICIONES_FIELDS.map((f) => [f.key, ''])),
    ...Object.fromEntries(BIOIMPEDANCIA_FIELDS.map((f) => [f.key, ''])),
}

export function EvaluacionOnline() {
    const [values, setValues] = useState(INITIAL_VALUES)
    const [activeStepId, setActiveStepId] = useState(STEPS[0].id)
    const [isMobileModalOpen, setIsMobileModalOpen] = useState(false)

    const activeStep = STEPS.find((s) => s.id === activeStepId) || STEPS[0]

    const handleChange = (key, value) => {
        setValues((prev) => ({ ...prev, [key]: value }))
    }

    const handleSelectStep = (stepId) => {
        setActiveStepId(stepId)
        setIsMobileModalOpen(true)
    }

    const goToStepOffset = (offset) => {
        const currentIndex = STEPS.findIndex((s) => s.id === activeStepId)
        const nextIndex = (currentIndex + offset + STEPS.length) % STEPS.length
        setActiveStepId(STEPS[nextIndex].id)
    }

    return (
        <div className='row onlineFormRowSty'>
            <div className='col-12 col-lg-8'>
                <div className='onlineOuterCardSty'>
                    <div className='onlineHeaderSty'>
                        <h1 className='h1 mb-2 text-tertiary fw-bold'>Evaluación Física</h1>
                        <p className='text-muted mb-0'>
                            Completa tus datos y métricas personales. Sigue las instrucciones indicadas por el
                            icono &quot;i&quot; para una evaluación correcta.
                        </p>
                    </div>

                    <div className='onlineSectionsStackSty'>
                        <PersonalInfoSection values={values} onChange={handleChange} />

                        <MedicionesSection
                            values={values}
                            onChange={handleChange}
                            activeStepId={activeStepId}
                            onSelectStep={handleSelectStep}
                        />

                        <BioimpedanciaSection
                            values={values}
                            onChange={handleChange}
                            activeStepId={activeStepId}
                            onSelectStep={handleSelectStep}
                        />
                    </div>
                </div>
            </div>

            <div className='col-lg-4 d-none d-lg-block'>
                <div className='onlineDesktopPanelSty'>
                    <InstructionsPanel
                        step={activeStep}
                        onPrev={() => goToStepOffset(-1)}
                        onNext={() => goToStepOffset(1)}
                    />
                </div>
            </div>

            <InstructionsModalMobile
                step={activeStep}
                isOpen={isMobileModalOpen}
                onClose={() => setIsMobileModalOpen(false)}
                onPrev={() => goToStepOffset(-1)}
                onNext={() => goToStepOffset(1)}
            />
        </div>
    )
}
