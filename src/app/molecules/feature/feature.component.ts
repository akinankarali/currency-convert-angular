import { Component } from "@angular/core";
import { CImageComponent } from "../../atoms/c-image/c-image.component";
import { TextComponent } from "../../atoms/text/text.component";

interface FeatureCard {
  src: string;
  alt: string;
  title: string;
  description: string;
}

@Component({
  selector: "feature",
  standalone: true,
  imports: [CImageComponent, TextComponent],
  templateUrl: "./feature.component.html",
  styleUrl: "./feature.component.scss",
})
export class FeatureComponent {
  cards: FeatureCard[] = [
    {
      src: "../assets/secure.svg",
      alt: "secure",
      title: "SECURE",
      description: `Send money online fast, secure and easy. Live tracking and notifications +
      flexible delivery and payment options.`,
    },
    {
      src: "../assets/accessible.svg",
      alt: "accessible",
      title: "EASY ACCESSIBLE",
      description: `Create a chart for any currency pair in the world to see their currency
      history. These currency charts use live mid-market rates, are easy to use,
      and are very reliable.`,
    },
    {
      src: "../assets/fast.svg",
      alt: "fast",
      title: "FAST AND RELIABLE",
      description: `Need to know when a currency hits a specific rate? The Xe Rate Alerts will
      let you know when the rate you need is triggered on your selected currency
      pairs.`,
    },
  ];
}
