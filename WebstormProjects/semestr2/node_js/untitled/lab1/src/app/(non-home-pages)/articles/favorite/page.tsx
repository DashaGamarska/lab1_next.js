import {fetchAllPosts, fetchPost} from '@/server/fetcher';
import { ArticlesInfo } from '@/components/articles/ArticlesInfo/ArticlesInfo';
import { FavoriteArticle } from '@/components/articles/RecentArticles/RecentArticles_for_favorite';
import {Suspense} from "react";

export default async function Favorite() {


    const articles =await fetchAllPosts();
    return (
        <div>
            <ArticlesInfo articles={articles} />
            <h3 className="mt-8 mb-4">Recent articles</h3>
            <div className="flex justify-between gap-6">
                <Suspense fallback={<p>Loading favorite article</p>}>
                    <FavoriteArticle id={1} />
                </Suspense>
                <Suspense fallback={<p>Loading favorite article</p>}>
                    <FavoriteArticle id={2} />
                </Suspense>
                <Suspense fallback={<p>Loading favorite article</p>} >
                    <FavoriteArticle id={3} />
                </Suspense>


            </div>
        </div>
    );
}