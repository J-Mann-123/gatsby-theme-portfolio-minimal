import React from 'react';
import { Animation } from '../../components/Animation';
import { Section } from '../../components/Section';
import { Slider } from '../../components/Slider';
import { ArticleCard, ArticleCardSkeleton } from '../../components/ArticleCard';
import { PageSection } from '../../types';
import * as classes from './style.module.css';

interface CustomTextCard {
    title: string;
    title2: string;
    category: string;
    publishedAt: Date; // Added this line
    link: string;
}

interface ArticlesSectionProps extends PageSection {
    customTexts: CustomTextCard[];
}

export function ArticlesSection({ sectionId, heading, customTexts }: ArticlesSectionProps): React.ReactElement {
    const renderCustomTexts = () => {
        return customTexts.map((customText, key) => (
            <ArticleCard
                key={key}
                data={{
                    title: customText.title,
                    title2: customText.title2,
                    category: customText.category,
                    publishedAt: new Date(customText.publishedAt),
                    link: customText.link,
                    // Add other properties as needed
                }}
            />
        ));
    };

    const renderSkeletons = () => {
        return [...Array(3)].map((_, key) => <ArticleCardSkeleton key={key} />);
    };

    return (
        <Animation type="fadeUp" delay={1000}>
            <Section anchor={sectionId} heading={heading}>
                <Slider additionalClasses={[classes.Articles]}>
                    {customTexts && customTexts.length > 0 ? renderCustomTexts() : renderSkeletons()}
                </Slider>
            </Section>
        </Animation>
    );
}
