import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Introduction from './Home/Introduction';
import Level1 from './Home/Level1';
import Level2 from './Home/Level2';
import Level3 from './Home/Level3';
import Grammar from './Home/Grammar';
import Practice from './Home/Practice';
import './Home.css';
import IntroductionLevel1 from './level1/IntroductionLevel1';
import BeFormLevel1 from './level1/BeFormLevel1';
import WHQuestionLevel1 from './level1/WHQuestionLevel1';
import TenseLevel1 from './level1/TenseLevel1';
import BeformLevel1Introduction from './level1/BeFormLevel1/BeformLevel1Introduction';
import BeformLevel1PositiveStatement from './level1/BeFormLevel1/BeformLevel1PositiveStatement';
import BeformLevel1NegativeStatement from './level1/BeFormLevel1/BeformLevel1NegativeStatement';
import BeformLevel1PositiveQuestion from './level1/BeFormLevel1/BeformLevel1PositiveQuestion';
import BeformLevel1NegativeQuestion from './level1/BeFormLevel1/BeformLevel1NegativeQuestion';
import Level2Introduction from './Level2/Level2Introduction';
import Level2ModelVerb from './Level2/Level2ModelVerb';
import Level2Structure from './Level2/Level2Structure';
import WHQuestionLevel1Intoduction from './level1/WHQuestionLevel1/WHQuestionLevel1Intoduction';
import WHQuestionLevel1PositiveWHQ from './level1/WHQuestionLevel1/WHQuestionLevel1PositiveWHQ';
import WHQuestionLevel1NegativeWHQ from './level1/WHQuestionLevel1/WHQuestionLevel1NegativeWHQ';
import WHQuestionLevel1BeformPositiveWHQ from './level1/WHQuestionLevel1/WHQuestionLevel1BeformPositiveWHQ';
import WHQuationLevel1BeformNegativeWHQ from './level1/WHQuestionLevel1/WHQuationLevel1BeformNegativeWHQ';
import TenseIntroduction from './level1/TenseLevel1/TenseIntroduction';
import TenseLevel1SimpleTense from './level1/TenseLevel1/TenseLevel1SimpleTense';
import TenseLevel1ContineousTense from './level1/TenseLevel1/TenseLevel1ContineousTense';
import TenseLevel1PerfectContineousTense from './level1/TenseLevel1/TenseLevel1PerfectContineousTense';
import TenseLevel1PerfectTense from './level1/TenseLevel1/TenseLevel1PerfectTense';
import TenseLevel1NegativeQuestionTense from './level1/TenseLevel1/TenseLevel1NegativeQuestionTense';
import TenseLevel1PositionQuestionTense from './level1/TenseLevel1/TenseLevel1PositionQuestionTense';
import TenseLevel1WHPositiveQuestionTense from './level1/TenseLevel1/TenseLevel1WHPositiveQuestionTense';
import TenseLevel1WHNegativeQuestionTense from './level1/TenseLevel1/TenseLevel1WHNegativeQuestionTense';
import ModelVerbLevel2Intoduction from './Level2/ModelVerb/ModelVerbLevel2Intoduction';
import ModelVerbLevel2PositiveStatement from './Level2/ModelVerb/ModelVerbLevel2PositiveStatement';
import ModelVerbLevel2NegativeStatement from './Level2/ModelVerb/ModelVerbLevel2NegativeStatement';
import ModelVerbLevel2PositiveQuestion from './Level2/ModelVerb/ModelVerbLevel2PositiveQuestion';
import ModelVerbLevel2NegativeQuestion from './Level2/ModelVerb/ModelVerbLevel2NegativeQuestion';
import ModelVerbLevel2WHPositiveQuestion from './Level2/ModelVerb/ModelVerbLevel2WHPositiveQuestion';
import ModelVerbLevel2WHNegativeQuestion from './Level2/ModelVerb/ModelVerbLevel2WHNegativeQuestion';
import StructureIntroduction from './Level2/Structure/StructureIntroduction';
import StructurePositiveStatement from './Level2/Structure/StructurePositiveStatement';
import StructureNegativeStatement from './Level2/Structure/StructureNegativeStatement';
import StructurePositiveQuestion from './Level2/Structure/StructurePositiveQuestion';
import StructureNegativeQuestion from './Level2/Structure/StructureNegativeQuestion';
import StructureWHPositiveQuestion from './Level2/Structure/StructureWHPositiveQuestion';
import StructureWhNegativeQuestion from './Level2/Structure/StructureWhNegativeQuestion';
import Indexpage from './indexpage';
import Article from './Level3/Article';
import DirectAndIndirectSpeech from './Level3/DirectAndIndirectSpeech';
import ActiveAndPassiveVoice from './Level3/ActiveAndPassiveVoice';
import IntroductionDirectAndIndirectSpeech from './Level3/DirectAndIndirectSpeech/IntroductionDirectAndIndirectSpeech';
import PositiveStatementDirectAndIndirectSpeech from './Level3/DirectAndIndirectSpeech/PositiveStatementDirectAndIndirectSpeech';
import NegativeStatementDirectAndIndirectSpeech from './Level3/DirectAndIndirectSpeech/NegativeStatementDirectAndIndirectSpeech';
import PositiveQueDirectAndIndirectSpeech from './Level3/DirectAndIndirectSpeech/PositiveQueDirectAndIndirectSpeech';
import NegativeQueDirectAndIndirectSpeech from './Level3/DirectAndIndirectSpeech/NegativeQueDirectAndIndirectSpeech';
import WHPositiveQuestionDirectAndIndirectSpeech from './Level3/DirectAndIndirectSpeech/WHPositiveQuestionDirectAndIndirectSpeech';
import WHNegativeQueDirectAndIndirectSpeech from './Level3/DirectAndIndirectSpeech/WHNegativeQueDirectAndIndirectSpeech';

const Home = () => {
    return (
        <div className="container d-flex">
            {/* Sidebar Navigation */}
            <div className="sidebar">
                <ul>
                    <li>
                        <NavLink 
                            to="introduction" 
                            className="nav-links text-dark" 
                            activeClassName="active-link"
                        >
                            <strong>Introduction</strong>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="level1" 
                            className="nav-links text-dark" 
                            activeClassName="active-link"
                        >
                            <strong>Level-1</strong>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="level2" 
                            className="nav-links text-dark" 
                            activeClassName="active-link"
                        >
                            <strong>Level-2</strong>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="level3" 
                            className="nav-links text-dark" 
                            activeClassName="active-link"
                        >
                            <strong>Level-3</strong>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="grammar" 
                            className="nav-links text-dark" 
                            activeClassName="active-link"
                        >
                            <strong>Grammar</strong>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="practice" 
                            className="nav-links text-dark" 
                            activeClassName="active-link"
                        >
                            <strong>Practice</strong>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Content Section */}
            <div className="content-section">
            <Routes>
            <Route path="introduction" element={<Introduction />} />
            <Route path="level1/*" element={<Level1 />} />

            <Route path="/introductionLevel1" element={<IntroductionLevel1 />} />
            
            <Route path="/beFormLevel1" element={<BeFormLevel1 />} />
            <Route path="/beformLevel1Introduction" element={<BeformLevel1Introduction />} />
            <Route path="/beformLevel1PositiveStatement" element={<BeformLevel1PositiveStatement />} />
            <Route path="/beformLevel1NegativeStatement" element={<BeformLevel1NegativeStatement />} />
            <Route path="/beformLevel1PositiveQuestion" element={<BeformLevel1PositiveQuestion />} />
            <Route path="/beformLevel1NegativeQuestion" element={<BeformLevel1NegativeQuestion />} />

            <Route path="/whquestionLevel1" element={<WHQuestionLevel1 />} />
            <Route path="/Level1WhIntroduction" element={<WHQuestionLevel1Intoduction />} />
            <Route path="/Level1WHPositiveQuation" element={<WHQuestionLevel1PositiveWHQ />} />
            <Route path="/Level1WHNegativeQuestion" element={<WHQuestionLevel1NegativeWHQ />} />
            <Route path="/beformLevel1WhPositiveQuestion" element={<WHQuestionLevel1BeformPositiveWHQ />} />
            <Route path="/beformLevel1WhNegativeQuestion" element={<WHQuationLevel1BeformNegativeWHQ />} />

            <Route path="/tenseLevel1" element={<TenseLevel1 />} />
            <Route path="/tenseLevel1Introduction" element={<TenseIntroduction />} />
            <Route path="/tenseLevel1SimpleTense" element={<TenseLevel1SimpleTense />} />
            <Route path="/tenseLevel1Continues" element={<TenseLevel1ContineousTense />} />
            <Route path="/tenseLevel1Prefect" element={<TenseLevel1PerfectTense />} />
            <Route path="/tenseLevel1PrefectContinues" element={<TenseLevel1PerfectContineousTense />} />
            <Route path="/tenseLevel1PositiveQuestion" element={<TenseLevel1PositionQuestionTense />} />
            <Route path="/tenseLevel1NegativeQuestion" element={<TenseLevel1NegativeQuestionTense />} />
            <Route path="/tenseLevel1WHPositiveQuestion" element={<TenseLevel1WHPositiveQuestionTense />} />
            <Route path="/tenseLevel1WHNegativeQuestion" element={<TenseLevel1WHNegativeQuestionTense />} />


            <Route path="level2" element={<Level2 />} />
            <Route path="introductionLevel2" element={<Level2Introduction />} />

            <Route path="modelverbLevel2" element={<Level2ModelVerb />} />
            <Route path="modelverbLevel2Introduction" element={<ModelVerbLevel2Intoduction />} />
            <Route path="modelverbLevel2PositiveStatement" element={<ModelVerbLevel2PositiveStatement />} />
            <Route path="modelverbLevel2NegativeStatement" element={<ModelVerbLevel2NegativeStatement/>} />
            <Route path="modelverbLevel2PositiveQuestion" element={<ModelVerbLevel2PositiveQuestion />} />
            <Route path="modelverbLevel2NegativeQuestion" element={<ModelVerbLevel2NegativeQuestion />} />
            <Route path="modelverbLevel2WHPositiveQuestion" element={<ModelVerbLevel2WHPositiveQuestion />} />
            <Route path="modelverbLevel2WHNegativeQuestion" element={<ModelVerbLevel2WHNegativeQuestion />} />
           

            <Route path="structureLevel1" element={<Level2Structure />} />
            <Route path="structureLevel2Introduction" element={<StructureIntroduction />} />
            <Route path="structureLevel2PositiveStatement" element={<StructurePositiveStatement />} />
            <Route path="structureLevel2NegativeStatement" element={<StructureNegativeStatement />} />
            <Route path="structureLevel2PositiveQuestion" element={<StructurePositiveQuestion />} />
            <Route path="structureLevel2NegativeQuestion" element={<StructureNegativeQuestion />} />
            <Route path="structureLevel2WHPositiveQuestion" element={<StructureWHPositiveQuestion/>} />
            <Route path="structureLevel2WHNegativeQuestion" element={<StructureWhNegativeQuestion />} />

            <Route path="/level3" element={<Level3 />} />
            <Route path="/article" element={<Article />} />

            <Route path="/directandindirectspeech" element={<DirectAndIndirectSpeech />} />
            <Route path="/introductiondirectandindirectspeech" element={<IntroductionDirectAndIndirectSpeech />} />
            <Route path="/positivestatementdirectandindirectspeech" element={<PositiveStatementDirectAndIndirectSpeech />} />
            <Route path="/negativestatementdirectandindirectspeech" element={<NegativeStatementDirectAndIndirectSpeech />} />
            <Route path="/positiveQuedirectandindirectspeech" element={<PositiveQueDirectAndIndirectSpeech />} />
            <Route path="/negativeQuedirectandindirectspeech" element={<NegativeQueDirectAndIndirectSpeech />} />
            <Route path="/whpositiveQuedirectandindirectspeech" element={<WHPositiveQuestionDirectAndIndirectSpeech />} />
            <Route path="/whnegativeQuedirectandindirectspeech" element={<WHNegativeQueDirectAndIndirectSpeech />} />

            <Route path="/activeandpassivevoice" element={<ActiveAndPassiveVoice />} />

            <Route path="grammar" element={<Grammar />} />
            <Route path="practice" element={<Practice />} />

            <Route path="/" element={<Indexpage />} />
        </Routes>
            </div>
        </div>
    );
};

export default Home;





{/* <>
<header>
    <a href="#">logo</a>
    <nav>
        <ul>
            <li>
                <link to="/introduction"><strong>Introduction</strong></link>
            </li>
            <li>
                <link to="level1" > <strong>Level-1</strong></link>
            </li>
        </ul>
    </nav>
</header>
</> */}